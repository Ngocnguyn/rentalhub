import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="max-w-screen-xl w-full h-auto flex justify-between items-center py-10 px-8 absolute top-0 left-0 right-0 bg-transparent z-50 mx-auto">
          <div className="w-56">
            <img src={Logo} alt="logo-img" className="w-full h-auto" />
          </div>
          <ul className="lg:flex gap-[2.1rem] list-none text-base font-rubik font-medium text-black hidden text-[16px] ">
            <li className="cursor-pointer transition-all duration-300 hover:text-[#ff4d30]  ">
              Home
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:text-[#ff4d30]  ">
              About
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:text-[#ff4d30]  ">
              Vehicle Models
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:text-[#ff4d30] ">
              Testimonials
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:text-[#ff4d30] ">
              Out Team
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:text-[#ff4d30] ">
              Contact
            </li>
          </ul>
          <div className="lg:flex gap-10 font-rubik font-medium items-center text-[16px] hidden ">
            <Link
              className="text-black cursor-pointer transition-all duration-300 hover:text-[#ff4d30] no-underline "
              to="/"
            >
              Sign In
            </Link>
            <Link
              className="bg-[#ff4d30] text-white px-10 py-4 rounded-md shadow-md transition-all duration-300 hover:shadow-md hover:bg-[#fa4226] no-underline "
              to="/"
            >
              Register
            </Link>
          </div>
          <div className="cursor-pointer text-[2.8rem] transition-all hover:text-[#ff4d30] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-menu-2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
