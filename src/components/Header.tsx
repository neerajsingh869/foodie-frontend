import { Link } from "react-router-dom";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { ModeToggle } from "./ModeToggler";

const Header = () => {
  return (
    <header className="border-b-2 border-b-blue-500 py-6 dark:bg-black">
      <div className="container mx-auto flex justify-between items-center text-blue-500">
        <Link to="/" className="font-bold text-3xl hover:text-black dark:hover:text-white">
          Foodie.com
        </Link>
        <div className="flex justify-between items-center md:hidden">
          <span className="mr-4">
            <ModeToggle />
          </span>
          <MobileNav />
        </div>
        <div className="md:flex md:justify-between md:items-center hidden">
          <span className="mr-4">
            <ModeToggle />
          </span>
          <DesktopNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
