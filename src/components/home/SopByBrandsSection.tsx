import Link from "next/link";
async function ShopByBrandsSection() {
  const response = await fetch("http://localhost:8000/api/brands", {
    cache: "force-cache",
  });
  const brands = await response.json();
  return (
    <section>
      <div className="global-container py-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Shop By Brands
        </h2>
      </div>
      <div>
        {/* Brand logos grid */}
        <div className="flex flex-wrap gap-2 justify-between items-center global-container pb-12">
          {brands.slice(0, 8).map((brand: any, i: number) => (
            <div
              key={brand.brand_name + "keys" + i}
              className="flex justify-center items-center basis-1/5 md:basis-1/9"
            >
              <Link
                href={`/brand/${brand.brand_name.replace(/\s+/g, "-")}`}
                className="w-full"
              >
                <img
                  src={brand.brand_image_url}
                  alt={brand.brand_name}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopByBrandsSection;
