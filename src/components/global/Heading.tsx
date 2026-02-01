"use client";

import { usePrivateRouteState } from "@/stores/privatelayout.store";
import BreadCumber from "./BreadCumber";
import { useParams } from "next/navigation";

function Heading() {
  const activeRoute = usePrivateRouteState((state) =>
    state.privateRoutes.find((route) => route.isActive),
  );
  const routeName = activeRoute?.displayName;
  const { id } = useParams();
  return (
    <>
      <BreadCumber name={routeName || ""} />
      <h2 className="text-[34px] font-semibold text-primary py-2 ">
        {routeName || "Page"} {id ? `> Order #${id}` : ""}
      </h2>
    </>
  );
}

export default Heading;
