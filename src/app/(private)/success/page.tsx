import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
function page() {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-center text-xl md:text-5xl font-bold">
        Transaction Successful!
      </h1>
      <p className="text-center mt-4 text-lg md:text-2xl">
        Thank you for your purchase. Your order has been placed successfully.
        <br />
        <Link href={"/"} className="text-blue-500 underline">
          Go back to Home Page
        </Link>
      </p>
      <div className="flex justify-center mt-8">
        <CircleCheckBig color="green" size={100} />
      </div>
    </div>
  );
}

export default page;
