import Link from "next/link";
import { categories } from "@/CONSTANTS";
import { Button } from "../ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  LocateIcon,
  X,
  MapPin,
} from "lucide-react";
function Footer() {
  return (
    <footer className="py-8 bg-primary  text-bright">
      <div className="global-container grid grid-cols-12 gap-4">
        <div className="categories col-span-6  md:col-span-3 lg:col-span-2">
          <h3 className="mb-2">Shop by Category</h3>
          <div className="flex gap-2 flex-col ">
            {categories.map((c) => (
              <Link
                href={`/category/${c.name}`}
                key={c.name}
                className="text-sm text-light0text"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="about col-span-6  md:col-span-3 lg:col-span-2">
          <h3 className="mb-2">About</h3>
          <div className="flex gap-2 flex-col ">
            <Link href={`#`} className="text-sm text-light0text">
              About Us
            </Link>
            <Link href={`#`} className="text-sm text-light0text">
              Contant Us
            </Link>
            <Link href={`#`} className="text-sm text-light0text">
              Careers
            </Link>
            <Link href={`#`} className="text-sm text-light0text">
              Press
            </Link>
          </div>
        </div>

        <div className="Policies col-span-6  md:col-span-3 lg:col-span-2">
          <h3 className="mb-2">Policy</h3>
          <div className="flex gap-2 flex-col ">
            <Link href={`#`} className="text-sm text-light0text">
              Return Policy
            </Link>
            <Link href={`#`} className="text-sm text-light0text">
              Terms of Use
            </Link>
            <Link href={`#`} className="text-sm text-light0text">
              Security
            </Link>
            <Link href={`#`} className="text-sm text-light0text">
              Privacy & Data
            </Link>
          </div>
        </div>

        <div className="social  col-span-6  md:col-span-3 lg:col-span-2 space-y-2 ">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full bg-primary-tint text-primary hover:bg-white"
            >
              <Instagram className="font-bold" />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full bg-primary-tint text-primary hover:bg-white"
            >
              <Linkedin />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full bg-primary-tint text-primary hover:bg-white"
            >
              <X />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full bg-primary-tint text-primary hover:bg-white"
            >
              <Facebook />
            </Button>
          </div>
          <div className="flex gap-2">
            <MapPin /> United States
          </div>
          <p className="text-light0text text-sm">
            © 2026 | Cora Leviene All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
