import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
function QuantityCounter() {
  return (
    <div>
      {" "}
      <div className="flex gap-4 quantity-counter items-center my-6">
        <h3 className="text-2xl font-semibold text-dark">Quantity: </h3>
        <div className="counter-buttons flex items-center gap-2  w-fit border border-neutral-300/50 rounded-md ">
          <Button
            variant={"ghost"}
            size={"icon-sm"}
            className="decrease-button py-1 cursor-pointer"
          >
            <Minus />
          </Button>
          <span className="text-xl font-semibold min-w-5 text-center">1</span>
          <Button
            variant={"ghost"}
            size={"icon-sm"}
            className="increase-button cursor-pointer"
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuantityCounter;
