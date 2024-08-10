import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="border-b-2 border-b-blue-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-3xl text-blue-500">Foodie.com</Link>
        <div className="flex justify-between items-center md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header