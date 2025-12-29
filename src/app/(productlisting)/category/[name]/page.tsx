import BreadCumber from "@/components/global/BreadCumber";
import Productlist from "@/components/global/Productlist";

type PageProps = {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ page?: string }>;
};

async function page({ params, searchParams }: PageProps) {
  const { name } = await params;
  const { page } = await searchParams;

  const path = `/category/${Number(name) || name.toLowerCase()}`;
  const apiPath = `/products/${name}`;
  return (
    <>
      <div>
        <h3 className="text-[34px] font-semibold text-primary py-2">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>
      </div>
      <div>
        <BreadCumber name={name} />
      </div>
      <div>
        <Productlist path={path} apiPath={apiPath} />
      </div>
    </>
  );
}

export default page;
