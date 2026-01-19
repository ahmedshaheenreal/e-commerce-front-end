"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { usePrivateRouteState } from "@/stores/privatelayout.store";
function SideBar() {
  const itemsState = usePrivateRouteState((s) => s.privateRoutes);
  const setActiveRoute = usePrivateRouteState((s) => s.setActiveRoute);
  const handleClick = (index: number) => {
    setActiveRoute(index);
  };
  return (
    <aside className="bg-grey h-full w-50 py-4 rounded-sm">
      <ul className="space-y-1">
        {itemsState.map((item, index) => (
          <li
            className="relative py-2 pl-4 hover:bg-primary-tint/20 transition-all duration-200"
            key={index + item.path}
            onClick={() => handleClick(index)}
          >
            {item.isActive && (
              <div className="absolute top-0 left-0 rounded-sm bg-primary text-primary w-1 h-full"></div>
            )}
            <Link
              href={item.path}
              className={`text-sm font-medium flex items-center justify-between w-full h-full ${item.isActive ? "text-primary" : "text-dark"} `}
            >
              {item.displayName}
              <ChevronRight className="text-primary " size={24} />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
