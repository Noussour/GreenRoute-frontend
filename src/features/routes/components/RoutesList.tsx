import { motion } from "motion/react";
import RouteCard from "./RouteCard";
import useRouteStore from "../store/RouteStore";
import { useShallow } from "zustand/shallow";

function RoutesList() {
  const { routes } = useRouteStore(
    useShallow((state) => ({
      routes: state.routes,
    })),
  );

  return (
    <motion.div
      key="list"
      className="space-y-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {routes.map((route, index) => (
        <motion.div
          key={route.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <RouteCard route={route} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default RoutesList;
