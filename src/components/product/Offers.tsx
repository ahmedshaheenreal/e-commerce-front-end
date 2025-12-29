import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
function Offers() {
  return (
    <div>
      <Card className="w-fit px-4 py-2 mb-8 border border-primary ">
        <div className="flex items-center gap-2 text-dark">
          <span className="font-medium">
            <p> Get up to 30% Off on order</p>
            <p> value above $100</p>
            <p>
              <Link className=" text-primary text-sm font-medium " href={"#"}>
                Terms & Conditions
              </Link>
            </p>
          </span>
          <span className="bg-grey p-2 rounded ">
            <span className="text-low-emphasis text-sm">Use Code</span> <br />
            <span className="font-medium">FIRST100</span>
          </span>
        </div>
      </Card>
    </div>
  );
}

export default Offers;
