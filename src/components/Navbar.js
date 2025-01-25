import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../datas/Navlinks";
import { FaPhone } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 py-5 md:h-[80px] md:flex md:items-center">
      <div className="container md:flex items-center md:justify-between">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[1.3rem]">Finsweet Auto</h2>

          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <IoCloseSharp /> : <RxHamburgerMenu />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0 md:flex md:justify-between items-center`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8  md:mr-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:border-b-2 hover:border-primary w-fit"
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 md:mt-0 flex items-center">
            <div className="text-[#fff] bg-[#61C3A1] rounded-full p-2 mr-4">
              <FaPhone />
            </div>
            <div>
              <p className="text-[0.8rem]">Need Assistance</p>
              <p className="font-semibold">1800 265 24 52</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
