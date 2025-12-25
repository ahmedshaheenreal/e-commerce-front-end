import React from "react";

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
            <img
              src="https://placehold.co/600x400/png"
              alt="Makeup"
              className="w-full max-h-100 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 px-3 py-1 rounded">
              <h3 className="text-lg font-semibold">Makeup</h3>
            </div>
          </div>
        </div>
        <div className="col-span-6 ">
          <div className="relative">
            <img
              src="https://placehold.co/600x400/png"
              alt="Accessories"
              className="w-full max-h-100 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 px-3 py-1 rounded">
              <h3 className="text-lg font-semibold">Accessories</h3>
            </div>
          </div>
        </div>

        <div className="col-span-6  ">
          <div className="relative">
            <img
              src="https://placehold.co/600x400/png"
              alt="Accessories"
              className="w-full max-h-100 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 px-3 py-1 rounded">
              <h3 className="text-lg font-semibold">Accessories</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WomenSection;
