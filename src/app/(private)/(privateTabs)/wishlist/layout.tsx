import WishlistHydrator from "@/providers/WishlistHydrator";
async function layout({ children }: { children: React.ReactNode }) {
  try {
    return (
      <>
        <WishlistHydrator initialWishlist={null} />
        {children}
      </>
    );
  } catch (error) {}
}

export default layout;
