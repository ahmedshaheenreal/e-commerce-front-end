import { categories } from "@/CONSTANTS";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { CarouselItem } from "../ui/carousel";

function HandpickedListItems() {
  return (
    <>
      {" "}
      {categories.map(({ name, image, id }) => (
        <CarouselItem key={name} className="max-w-76 ">
          <Link href={`/category/handpicked/${id}}`}>
            <Card className="relative  max-w-76 py-0 border-none hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div>
                <img
                  src={image}
                  alt={name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-linear-to-t from-[#03181a]   to-[#C4C4C400] opacity-80 rounded-lg bg-red"></div>

              <CardHeader className="  items-center text-center absolute bottom-1 left-1  shadow-none px-4 py-2  ">
                <CardTitle className="text-dark font-bold relative">
                  {name}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </CarouselItem>
      ))}
    </>
  );
}

export default HandpickedListItems;
