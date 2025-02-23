"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

// Fix for default marker icons in Leaflet
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  width: string;
  height: string;
}

const Map = ({ width, height }: MapProps) => {
  const [center, setCenter] = useState<LatLngExpression | null>(null);
  const zoom = 13;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting user location:", error);
          // Fallback to a default location if user denies geolocation
          setCenter([51.505, -0.09]); // Latitude and Longitude for London
        },
      );
    } else {
      // Fallback to a default location if geolocation is not supported
      setCenter([51.505, -0.09]); // Latitude and Longitude for London
    }
  }, []);

  if (!center) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer center={center} zoom={zoom} style={{ height, width }}>
      {/* Add OpenStreetMap tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add a marker with a popup */}
      <Marker position={center}>
        <Popup>You are here.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
