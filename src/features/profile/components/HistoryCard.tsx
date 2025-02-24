import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { travelHistory } from "../constants";
import { Badge } from "@/components/ui/badge";

function HistoryCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Travel History</CardTitle>
          <Button variant="outline" size="sm">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {travelHistory.map((trip) => (
            <div
              key={trip.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <trip.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-grow">
                <div className="font-medium">{trip.route}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{trip.date}</span>
                  <span>•</span>
                  <span>{trip.duration}</span>
                </div>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {trip.impact}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default HistoryCard;
