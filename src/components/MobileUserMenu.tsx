import { useAuth0 } from "@auth0/auth0-react";
import { LogOut, User, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const MobileUserMenu = () => {
  const { logout } = useAuth0();

  return (
    <div className="flex flex-col gap-2 w-full text-black text-lg">
      <div className="cursor-pointer flex-1 text-white hover:bg-black flex justify-center bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white">
        <Link to="/restaurant" className="flex p-2 items-center justify-center w-full">
          <UtensilsCrossed className="mr-2 h-6 w-5" />
          <span>My Restaurant</span>
        </Link>
      </div>
      <div className="cursor-pointer flex-1 text-white hover:bg-black flex justify-center bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white">
        <Link to="/user-profile" className="flex p-2 items-center justify-center w-full">
          <User className="mr-2 h-6 w-5" />
          <span>Profile</span>
        </Link>
      </div>
      <div
        onClick={() => logout()}
        className="cursor-pointer p-2 flex-1 ext-md flex items-center text-white hover:bg-black justify-center bg-blue-500 focus:bg-blue-500 rounded-md hover:text-white focus:text-white"
      >
        <LogOut className="mr-2 h-6 w-5" />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default MobileUserMenu;
