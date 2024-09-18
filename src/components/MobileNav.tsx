import { LogIn, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import MobileUserMenu from "./MobileUserMenu";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-blue-500" />
      </SheetTrigger>

      <SheetContent className="w-72">
        <SheetTitle>
          {isAuthenticated ? (
            <span>Hi {user?.nickname}!</span>
          ) : (
            <span>Welcome to Foodie.com!</span>
          )}
        </SheetTitle>
        <Separator className="my-4" />
        <div className="flex" id="radix-:r5:">
          {isAuthenticated ? (
            <MobileUserMenu />
          ) : (
            <Button
              className="flex-1 font-bold  bg-blue-500 text-md"
              onClick={() => loginWithRedirect()}
            >
              <LogIn className="mr-2 h-6 w-5" />
              <span className="pb-1">Log In</span>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
