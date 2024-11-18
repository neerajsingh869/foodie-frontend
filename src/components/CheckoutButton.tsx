import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";
import { CardFooter } from "./ui/card";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

export type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
};

const CheckoutButton = ({ onCheckout, disabled }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

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

  if (isAuthLoading || !currentUser) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button disabled={disabled} className="bg-blue-500 flex-1">
          Go to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-50 md:min-w-[600px] max-w-[425px]">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
