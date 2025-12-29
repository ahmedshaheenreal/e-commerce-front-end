import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function DeliveryDetails() {
  return (
    <div className="delivery-details md:items-center flex flex-col md:flex-row gap-4">
      <div>
        <h3 className="text-sm md:text-xl font-semibold text-dark mb-2">
          Delivery Details
        </h3>
        <p className=" text-xs md:text-sm font-medium text-low-emphasis">
          Check estimated delivery
          <br /> date/pickup option.
        </p>
      </div>
      <div className="grow relative h-fit ">
        <Input
          className=" border-none focus-visible:ring-0 w-full  placeholder:font-medium "
          placeholder="Apply Valid Pincode"
          disabled
        />
        <Button
          className="absolute  top-1/2 -translate-y-1/2 right-1 hover:bg-transparent text-primary  cursor-pointer"
          variant={"ghost"}
        >
          CHECK
        </Button>
      </div>
    </div>
  );
}

export default DeliveryDetails;
