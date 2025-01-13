import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-b-2 bg-blue-500 dark:bg-blue-700 py-6">
      <div className="container mx-auto flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center text-white">
        <Link to="/" className="font-bold text-3xl">
          <span className="hover:dark:text-white hover:text-gray-900 dark:text-gray-900">
            Foodie.com
          </span>
        </Link>
        <div className="dark:text-gray-900 font-bold flex gap-4">
          <span className="hover:dark:text-white hover:text-gray-900 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:dark:text-white hover:text-gray-900 cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
