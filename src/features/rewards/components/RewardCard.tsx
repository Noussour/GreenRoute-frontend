import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { userPoints } from "../constants";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Reward } from "../types";

function RewardCard({ reward }: { reward: Reward }) {
  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {reward.name}
            </CardTitle>
            <Badge variant="outline">{reward.category}</Badge>
          </div>
          <div className="p-2 bg-primary/10 rounded-full">
            <reward.icon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{reward.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{reward.points} points</span>
            <span className="text-sm text-muted-foreground">
              {Math.round((userPoints / reward.points) * 100)}% achieved
            </span>
          </div>
          <Progress
            value={(userPoints / reward.points) * 100}
            className="h-2"
          />
          <Button
            variant="outline"
            className="w-full mt-2"
            disabled={userPoints < reward.points}
          >
            {userPoints >= reward.points
              ? "Redeem Reward"
              : `${reward.points - userPoints} points needed`}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default RewardCard;
