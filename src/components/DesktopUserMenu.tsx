import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { LogOut, User, UtensilsCrossed } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const DesktopUserMenu = () => {
  const { logout, user } = useAuth0();

  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          src={user?.picture}
          alt={`${user?.name} Image`}
          className="object-contain h-12 rounded-[100%] cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 p-2 border-2">
        <DropdownMenuGroup className="font-bold flex flex-col gap-1">
          <DropdownMenuItem className="text-md p-0 hover:bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white">
            <Link to="/manage-restaurant" className="flex p-2 items-center w-full">
              <UtensilsCrossed className="mr-2 h-6 w-5" />
              <span>My Restaurant</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-md p-0 hover:bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white">
            <Link to="/user-profile" className="flex p-2 items-center w-full">
              <User className="mr-2 h-6 w-5" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => logout()}
            className="text-md flex items-center text-md hover:bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white"
          >
            <LogOut className="mr-2 h-6 w-5" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopUserMenu;
