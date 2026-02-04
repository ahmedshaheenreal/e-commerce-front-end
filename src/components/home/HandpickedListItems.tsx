import { categories } from "@/CONSTANTS";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { CarouselItem } from "../ui/carousel";
import { Suspense } from "react";
import CardSkelaton from "../global/Skeletons/CardSkelaton";
import Image from "next/image";

async function HandpickedListItems() {
  console.log("Rendering HandpickedListItems", process.env.NEXT_PUBLIC_API_URL);
  console.log({
    NODE_ENV: process.env.NODE_ENV,
  });
  return (
    <>
      {categories.map(({ name, image, id }) => (
        <Suspense key={id + "category"} fallback={<CardSkelaton />}>
          <CarouselItem key={name + id} className="max-w-76 ">
            <Link href={`/category/handpicked/${id}`} title={name}>
              <Card className="relative  max-w-76 py-0 border-none hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div>
                  <Image
                    loading="eager"
                    src={image}
                    alt={name}
                    className="object-cover w-full h-48"
                    width={300}
                    height={192}
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-linear-to-t from-[#03181A75]   to-[#c4c4c400]  rounded-lg bg-red"></div>

                <CardHeader className="  items-center text-center absolute bottom-1 left-1  shadow-none px-4 py-2  ">
                  <CardTitle className="text-dark font-bold relative">
                    {name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </CarouselItem>
        </Suspense>
      ))}
    </>
  );
}

export default HandpickedListItems;
