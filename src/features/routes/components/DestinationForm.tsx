import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import React, { useState } from "react";

function DestinationForm({
  handleSearch,
}: {
  handleSearch: (e: React.FormEvent) => void;
}) {
  const [destination, setDestination] = useState("");

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSearch} className="flex gap-3">
          <div className="relative flex-grow">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default DestinationForm;
