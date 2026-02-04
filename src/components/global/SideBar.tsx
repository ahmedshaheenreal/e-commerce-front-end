"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePrivateRouteState } from "@/stores/privatelayout.store";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
function SideBar() {
  const [ishidden, setIsHidden] = useState<boolean>(true);
  const itemsState = usePrivateRouteState((s) => s.privateRoutes);
  const setActiveRoute = usePrivateRouteState((s) => s.setActiveRoute);
  const path = usePathname();
  const activeRouteIndex = itemsState.findIndex((route) =>
    path.includes(route.path),
  );
  useEffect(() => {
    setActiveRoute(activeRouteIndex);
  }, [path]);
  const handleClick = (index: number) => {
    setActiveRoute(index);
    setIsHidden(true);
  };
  const toggleSideBar = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <aside
      className={`z-50 transition-all duration-300 fixed ${ishidden ? " -translate-x-full left-0" : "translate-x-0  left-0"} md:translate-x-0 md:static  bg-grey h-full w-50 py-4 rounded-sm`}
    >
      <div className="relative">
        {
          <Button
            size={"icon-sm"}
            className={
              "bg-grey absolute translate-x-full md:hidden right-0 z-50 top-20 rounded-none border-primary/80 border-l-transparent opacity-95 "
            }
            onClick={toggleSideBar}
            variant={"outline"}
          >
            <ArrowRight className="text-primary opacity-100" />
          </Button>
        }
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
      </div>
    </aside>
  );
}

export default SideBar;
