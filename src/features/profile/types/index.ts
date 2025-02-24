export interface UserStats {
  name: string;
  joinDate: string;
  totalTrips: number;
  co2Saved: number;
  level: string;
  progress: number;
  nextLevel: string;
  pointsToNext: number;
}

export interface Achievement {
  title: string;
  date: string;
  icon: React.ElementType;
}

export interface Trip {
  id: number;
  date: string;
  route: string;
  mode: string;
  icon: React.ElementType;
  impact: string;
  duration: string;
}
