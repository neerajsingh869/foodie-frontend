import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader2 } from "lucide-react";

import { Button } from "./ui/button";
import { CardFooter } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

export type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
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

  if (isAuthLoading || !currentUser || isLoading) {
    return (
      <CardFooter>
        <Button disabled className="flex-1">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading
        </Button>
      </CardFooter>
    );
  }

  return (
    <Dialog>
      <DialogTrigger className="flex w-full">
        <Button disabled={disabled} className="bg-blue-500 flex-1 mx-4 mb-6">
          Go to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-50 md:min-w-[600px] max-w-[425px]">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Delivery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
