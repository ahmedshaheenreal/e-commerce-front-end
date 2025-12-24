import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavBar() {
  return (
    <header>
      <div className="hidden lg:flex">
        <DesktopNav />
      </div>

      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
