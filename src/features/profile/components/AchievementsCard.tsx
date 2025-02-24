import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CircleEllipsis, Star } from "lucide-react";
import { achievements } from "../constants";

function AchivementsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Recent Achievements
          </CardTitle>
          <Button variant="ghost" size="icon">
            <CircleEllipsis className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <achievement.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-grow">
                <div className="font-medium">{achievement.title}</div>
                <div className="text-sm text-muted-foreground">
                  {achievement.date}
                </div>
              </div>
              <Star className="h-4 w-4 text-yellow-500" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default AchivementsCard;
