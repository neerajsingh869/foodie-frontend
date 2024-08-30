import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="ghost"
      className="hover:bg-white hover:text-blue-500 text-md font-bold"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default MainNav;
