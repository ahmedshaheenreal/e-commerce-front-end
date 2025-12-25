async function layout({
  children,
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
  children: React.ReactNode;
}) {
  // const { page } = await searchParams;
  return (
    <div className="global-container py-4">
      <div className="hero relative">
        <div className="top-1/2 right-8 absolute text-end -translate-y-1/2 text-dark text-xl sm:text-3xl   md:text-5xl lg:text-7xl tracking-tight">
          <h3 className="  font-bold">UP TO 70% OFF</h3>
          <p className="font-normal ">BLACK FRIDAY </p>
        </div>

        <img
          src="/blackfridayedited.png"
          alt="Hero Banner for Category page"
          className="w-full object-cover rounded-2xl "
        />
      </div>
      {children}
    </div>
  );
}

export default layout;
