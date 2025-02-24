import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Clock, Leaf } from "lucide-react";
import useRouteStore from "../store/RouteStore";
import { Route } from "../types";
import { getEcoScoreColor } from "../lib/utils";
import { useShallow } from "zustand/shallow";

function RouteCard({ route, index }: { route: Route; index: number }) {
  const { selectedRoute, setSelectedRoute } = useRouteStore(
    useShallow((state) => ({
      selectedRoute: state.selectedRoute,
      setSelectedRoute: state.setSelectedRoute,
    })),
  );

  return (
    <Card
      className={`transition-all hover:shadow-lg cursor-pointer ${
        selectedRoute?.id === route.id ? "ring-2 ring-primary" : ""
      }`}
      onClick={() => setSelectedRoute(route)}
    >
      <CardHeader className="flex flex-row items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <route.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              {route.mode}
              {index === 0 && (
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-500"
                >
                  <Leaf className="h-3 w-3 mr-1" />
                  Best Choice
                </Badge>
              )}
            </CardTitle>
          </div>
        </div>
        <Badge variant="outline" className={getEcoScoreColor(route.ecoScore)}>
          Eco Score: {route.ecoScore}
        </Badge>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {route.duration}
          </div>
          <div className="flex items-center">
            <ArrowRight className="h-4 w-4 mr-1" />
            {route.distance}
          </div>
        </div>
        <Progress value={route.ecoScore} className="h-2" />
      </CardContent>
    </Card>
  );
}

export default RouteCard;
