import Productlist from "@/components/global/Productlist";
import BreadCumber from "@/components/global/BreadCumber";
async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const path = `/newarrivals`;
  const apiPath = `/newArrivals/all?page=${Number(page) || 1}`;
  console.log("NEW ARRIVALS PAGE SEARCH PARAMS:", apiPath);
  return (
    <>
      <div>
        <h3 className="text-[34px] font-semibold text-primary py-2">
          New Arrivals
        </h3>
      </div>
      <div>
        <BreadCumber name={"New Arrivals"} />
      </div>
      <div>
        <Productlist path={path} apiPath={apiPath} />
      </div>
    </>
  );
}

export default page;
