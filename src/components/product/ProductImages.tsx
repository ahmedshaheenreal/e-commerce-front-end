function ProductImages({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="pictures col-span-6 flex flex-col gap-4 max-w-full">
      <div className="main-picture flex justify-center">
        <img
          src={imageUrl}
          alt="Main Product Image p-0"
          className="max-w-130 max-h-[70vh] rounded-md w-full h-auto object-cover"
        />
      </div>
      <div className="sub-pictures flex gap-4 justify-center">
        <img
          src="/product.png"
          alt="Sub Image 1"
          className="w-20 h-20 rounded-md"
        />
        <img
          src="/product.png"
          alt="Sub Image 2"
          className="w-20 h-20 rounded-md"
        />
      </div>
    </div>
  );
}

export default ProductImages;
