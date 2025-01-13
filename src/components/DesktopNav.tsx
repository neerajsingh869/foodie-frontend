import { useAuth0 } from "@auth0/auth0-react";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import DesktopUserMenu from "./DesktopUserMenu";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-black dark:hover:text-white mr-5">
            Order Status
          </Link>
          <DesktopUserMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="text-md font-bold"
          onClick={() => loginWithRedirect()}
        >
          <LogIn className="mr-2 h-6 w-5" />
          <span className="pb-1">Log In</span>
        </Button>
      )}
    </>
  );
};

export default DesktopNav;
