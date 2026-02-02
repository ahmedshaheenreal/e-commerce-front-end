import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
function Hero() {
  return (
    <section>
      <div className="global-container relative rounded-2xl overflow-hidden min-h-30">
        <Image
          width={1200}
          height={400}
          src="https://iili.io/fZ7sZCu.png"
          alt="Hero image"
          className=" min-h-30 w-full object-cover rounded-2xl max-h-100   top-0 left-5 "
        />

        <div className="absolute bg-[#dedede]/70 w-3/5 z-10 top-1/2 right-3 -translate-y-1/2 p-2  md:p-8 rounded-3xl  space-y-2 md:space-y-5">
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-primary font-extrabold line-hight-tight">
            Carry your Funk
          </h1>
          <p className=" text-xs md:text-lg text-primary font-medium">
            Trendy handbags collection for your
            <br className="hidden md:block" /> party animal
          </p>
          <Button size={"lg"} className="hidden md:flex">
            <ArrowRight className="size-4" /> Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
