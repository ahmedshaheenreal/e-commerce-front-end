import SideBar from "@/components/global/SideBar";
import React from "react";

import Heading from "@/components/global/Heading";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="global-container relative">
      <Heading />
      <div className="flex gap-8">
        <SideBar />

        <div className="my-8">{children}</div>
      </div>
    </div>
  );
}

export default layout;
