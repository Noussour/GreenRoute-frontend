import { Route } from "@/features/routes/types";

const API_KEY = process.env.NEXT_PUBLIC_OPENROUTE_API_KEY || "";
const BASE_URL = "https://api.openrouteservice.org";

type Coordinates = [number, number];

interface PlaceSuggestion {
  name: string;
  country: string;
  county?: string;
  region?: string;
}

async function getCoordinates(place: string): Promise<Coordinates> {
  const response = await fetch(
    `${BASE_URL}/geocode/search?api_key=${API_KEY}&text=${encodeURIComponent(place)}`,
  );
  const data = await response.json();
  if (data.features && data.features.length > 0) {
    return data.features[0].geometry.coordinates;
  }
  throw new Error("Location not found");
}

export async function getPlaceSuggestions(
  query: string,
): Promise<PlaceSuggestion[]> {
  const response = await fetch(
    `${BASE_URL}/geocode/autocomplete?api_key=${API_KEY}&text=${encodeURIComponent(query)}`,
  );
  const data = await response.json();

  if (data.features && data.features.length > 0) {
    return data.features.map((feature: any) => ({
      name: feature.properties.name,
      country: feature.properties.country,
      county: feature.properties.county,
      region: feature.properties.region,
    }));
  }

  return [];
}

export async function getRoutes(from: string, to: string): Promise<Route[]> {
  try {
    const [fromCoords, toCoords] = await Promise.all([
      getCoordinates(from),
      getCoordinates(to),
    ]);

    const profiles = ["foot-walking", "cycling-regular", "driving-car"];
    const routePromises = profiles.map((profile) =>
      fetch(
        `${BASE_URL}/v2/directions/${profile}?api_key=${API_KEY}&start=${fromCoords.join(",")}&end=${toCoords.join(",")}`,
      ).then((res) => res.json()),
    );

    const routeResults = await Promise.all(routePromises);

    const routes: Route[] = routeResults.map((result, index) => {
      const summary = result.features[0].properties.summary;
      const distance = (summary.distance / 1000).toFixed(2);
      const duration = (summary.duration / 60).toFixed(0);

      let mode: "Walk" | "Bike" | "Car";
      let icon: "FootprintsIcon" | "Bike" | "Car";
      let ecoScore: number;

      switch (profiles[index]) {
        case "foot-walking":
          mode = "Walk";
          icon = "FootprintsIcon";
          ecoScore = 100;
          break;
        case "cycling-regular":
          mode = "Bike";
          icon = "Bike";
          ecoScore = 90;
          break;
        case "driving-car":
          mode = "Car";
          icon = "Car";
          ecoScore = 30;
          break;
        default:
          throw new Error("Invalid profile");
      }

      return {
        id: index + 1,
        mode,
        icon,
        duration: `${duration} mins`,
        distance: `${distance} km`,
        ecoScore,
      };
    });

    return routes.sort((a, b) => b.ecoScore - a.ecoScore);
  } catch (error) {
    console.error("Error fetching routes:", error);
    return [];
  }
}
