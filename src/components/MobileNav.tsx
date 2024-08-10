import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-blue-500" />
      </SheetTrigger>

      <SheetContent>
        <SheetTitle>
          Welcome to Foodie.com!
        </SheetTitle>
        <Separator className="my-4" />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold  bg-blue-500">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
};

export default MobileNav;