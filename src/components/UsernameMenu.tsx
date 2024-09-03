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

const UsernameMenu = () => {
  const { logout, user } = useAuth0();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            src={user?.picture}
            alt={`${user?.name} Image`}
            className="object-contain h-12 rounded-[100%]"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 p-2 border-2">
          <DropdownMenuGroup className="font-bold flex flex-col gap-1">
            <DropdownMenuItem className="text-md  hover:bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white">
              <Link to="/restaurant" className="flex items-center">
                <UtensilsCrossed className="mr-2 h-6 w-5" />
                <span>My Restaurant</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-md  hover:bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white">
              <Link to="/user-profile" className="flex items-center">
                <User className="mr-2 h-6 w-5" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => logout()}
              className="text-md flex items-center text-md  hover:bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white"
            >
              <LogOut className="mr-2 h-6 w-5" />
              <span>Log out</span>
              {/* <Button className="bg-black text-white text-lg hover:bg-black" >
                Log Out
              </Button> */}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UsernameMenu;
