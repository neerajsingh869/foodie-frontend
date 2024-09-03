import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";
import DesktopUserMenu from "./DesktopUserMenu";
import { LogIn } from "lucide-react";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <DesktopUserMenu />
      ) : (
        <Button
          variant="ghost"
          className="hover:bg-white hover:text-blue-500 text-md font-bold"
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
