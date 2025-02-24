import { create } from "zustand";
import { Route } from "../types";

interface RouteStore {
  routes: Route[];
  selectedRoute: Route | null;
  view: string;
  setRoutes: (routes: Route[]) => void;
  setSelectedRoute: (route: Route | null) => void;
  setView: (view: string) => void;
}

const useRouteStore = create<RouteStore>((set) => ({
  routes: [],
  selectedRoute: null,
  view: "list",
  setRoutes: (routes) => set({ routes }),
  setSelectedRoute: (route) => set({ selectedRoute: route }),
  setView: (view) => set({ view }),
}));

export default useRouteStore;
