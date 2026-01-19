"use client";

import { usePrivateRouteState } from "@/stores/privatelayout.store";
import BreadCumber from "./BreadCumber";

function Heading() {
  const activeRoute = usePrivateRouteState((state) =>
    state.privateRoutes.find((route) => route.isActive),
  );
  const routeName = activeRoute?.displayName;
  return (
    <>
      <BreadCumber name={routeName || ""} />
      <h2 className="text-[34px] font-semibold text-primary py-2 ">
        {routeName || "Page"}
      </h2>
    </>
  );
}

export default Heading;
