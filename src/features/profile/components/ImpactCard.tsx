import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { CircleEllipsis, TrendingUp } from "lucide-react";
import React from "react";
import { userStats } from "../constants";
import { Button } from "@/components/ui/button";

function ImpactCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Environmental Impact
          </CardTitle>
          <Button variant="ghost" size="icon">
            <CircleEllipsis className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-primary/5 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary">
              {userStats.totalTrips}
            </div>
            <div className="text-sm text-muted-foreground">Green Trips</div>
          </div>
          <div className="p-4 bg-green-500/5 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-500">
              {userStats.co2Saved}kg
            </div>
            <div className="text-sm text-muted-foreground">CO2 Saved</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ImpactCard;
