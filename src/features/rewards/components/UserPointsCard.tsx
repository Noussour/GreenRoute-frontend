import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Star, Trophy } from "lucide-react";
import React from "react";
import { nextMilestone, userLevel, userPoints } from "../constants";
import { Badge } from "@/components/ui/badge";

function UserPointsCard() {
  return (
    <Card className="relative overflow-hidden">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-grow space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  {userLevel}
                  <Badge variant="secondary" className="bg-primary/10">
                    <Star className="h-3 w-3 mr-1" />
                    Level 3
                  </Badge>
                </h2>
                <p className="text-sm text-muted-foreground">
                  {userPoints} points • {nextMilestone - userPoints} points to
                  next reward
                </p>
              </div>
              <Button variant="outline" size="sm">
                View History
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-1">
              <Progress
                value={(userPoints / nextMilestone) * 100}
                className="h-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0</span>
                <span>{nextMilestone} points</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserPointsCard;
