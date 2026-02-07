import Image from "next/image";
function WomenSection() {
  return (
    <section className="py-8">
      <div className="global-container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Makeup and accessories
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-6 global-container">
        <div className="col-span-12 ">
          <div className="relative">
            <Image
              width={1200}
              height={400}
              src="https://iili.io/fZYXRyl.png"
              alt="Makeup"
              className="w-full object-contain rounded-lg"
            />
            <div className="absolute z-50 top-1/2 left-5 -translate-y-1/2 bg-opacity-75 px-3 py-1 rounded text-[#97451F]">
              <p className="text-lg md:text-3xl">LIFESTYLE</p>
              <h3 className="md:text-5xl  font-bold">
                Makeup Accessories <br /> from Top Brands
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 ">
          <div className="relative">
            <Image
              width={600}
              height={400}
              src="https://iili.io/fZada2I.png"
              alt="Women Accessories / Skin Care"
              className="w-full max-h-100 object-cover rounded-lg"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-2 bg-opacity-75 px-3 py-1 rounded">
              <h3 className="text-lg md:text-4xl font-bold text-primary">
                Facepacks <br /> & Peels
              </h3>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 ">
          <div className="relative overflow-hidden">
            <Image
              width={600}
              height={200}
              src="https://iili.io/fZa0icQ.png"
              alt="Accessories for women "
              className="w-full md:h-100 object-cover rounded-lg"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-2 bg-opacity-75 px-3 py-1 rounded">
              <h3 className="text-lg font-bold text-[#A53F64] md:text-4xl">
                Skincare <br /> Essentials
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WomenSection;
