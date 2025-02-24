import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Trophy } from "lucide-react";
import React from "react";
import { userStats } from "../constants";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { deleteToken } from "@/features/auth/api";
import { showSuccessToast } from "@/lib/toastHandler";

function InfosCard() {
  const router = useRouter();

  const handleLogOut = async () => {
    await deleteToken();

    // On success
    showSuccessToast("Logout successful");
    router.push("/");
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback className="text-xl">HD</AvatarFallback>
          </Avatar>

          <div className="flex-grow space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  {userStats.name}
                  <Badge variant="secondary" className="bg-primary/10">
                    <Trophy className="h-3 w-3 mr-1" />
                    {userStats.level}
                  </Badge>
                </h2>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Joined {userStats.joinDate}
                  </span>
                  <span>•</span>
                  <span>{userStats.totalTrips} Green Trips</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Edit Profile
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive bg-destructive/10 hover:text-white hover:bg-destructive/50"
                  onClick={handleLogOut}
                >
                  Logout
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress to {userStats.nextLevel}</span>
                <span>{userStats.pointsToNext} points needed</span>
              </div>
              <progress value={userStats.progress} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default InfosCard;
