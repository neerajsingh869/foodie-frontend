import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";
import { CardFooter } from "./ui/card";
import LoadingButton from "./LoadingButton";

const CheckoutButton = () => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();
  const { pathname } = useLocation();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <CardFooter>
        <Button onClick={onLogin} className="bg-blue-500 flex-1">
          Log in to check out
        </Button>
      </CardFooter>
    );
  }

  if (isAuthLoading) {
    return <LoadingButton />;
  }

  return (
    <CardFooter>
      <Button className="bg-blue-500 flex-1">Checkout button</Button>
    </CardFooter>
  );
};

export default CheckoutButton;
