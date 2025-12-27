import BreadCumber from "@/components/global/BreadCumber";
import Productlist from "@/components/global/Productlist";

async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ keyword: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { keyword } = await params;
  const { page } = await searchParams;
  const path = `/search/${keyword}`;
  const apiPath = `/search/${keyword}?page=${Number(page) || 1}`;

  return (
    <>
      <div>
        <h3 className="text-[34px] font-semibold text-primary py-2">
          Search Results for "{keyword}"
        </h3>
      </div>
      <div>
        <BreadCumber name={"Search"} />
      </div>
      <div>
        <Productlist path={path} apiPath={apiPath} />
      </div>
    </>
  );
}

export default Page;
