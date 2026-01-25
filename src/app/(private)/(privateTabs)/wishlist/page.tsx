import WishList from "@/components/wishlist/Wishist";
export const dynamic = "force-dynamic";
async function page() {
  try {
    return <WishList />;
  } catch (error: any) {
    console.error("ERROR", JSON.stringify(error));
    return (
      <>
        <p>{JSON.stringify(error)}</p>
      </>
    );
  }
}

export default page;
