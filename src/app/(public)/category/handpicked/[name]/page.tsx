import Productlist from "@/components/global/Productlist";
import BreadCumber from "@/components/global/BreadCumber";
type PageProps = {
  params: Promise<{ name: number }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function page({ params, searchParams }: PageProps) {
  const { name } = await params;
  const { page } = await searchParams;

  const path = `/category/handpicked/${Number(name) || name}`;
  const apiPath = `/${Number(name) || name}/handpicked`;

  return (
    <>
      <div>
        <h3 className="text-[34px] font-semibold text-primary py-2">
          Handpicked
        </h3>
      </div>
      <div>
        <BreadCumber name={"Handpicked"} />
      </div>
      <div>
        <Productlist apiPath={apiPath} path={path} />
      </div>
    </>
  );
}
export default page;
