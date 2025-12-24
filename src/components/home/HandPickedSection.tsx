"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function HandPickedSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-primary py-4 mt-12">
      <div className="global-container ">
        <h2 className="text-2xl md:text-3xl  font-semibold  text-bright lg:px-0">
          Handpicked Collections
        </h2>

        <Carousel>
          <CarouselContent className="py-8 px-4 lg:px-0 global-container flex gap-5  ove">
            {children}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex 2xl:-left-12 lg:left-4 cursor-pointer" />
          <CarouselNext className="hidden lg:flex 2xl:-right-12 lg:right-4 cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
}

export default HandPickedSection;
