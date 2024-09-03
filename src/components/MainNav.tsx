import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant="ghost"
          className="hover:bg-white hover:text-blue-500 text-md font-bold"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </>
  );
};

export default MainNav;
