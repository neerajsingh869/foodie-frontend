import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-b-2 bg-blue-500 py-6">
      <div className="container mx-auto flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <Link to="/" className="font-bold text-3xl text-white">
          Foodie.com
        </Link>
        <div className="text-white font-bold flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;