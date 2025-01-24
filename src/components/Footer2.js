import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../datas/Navlinks";

function Footer2() {
  return (
    <div className="bg-black">
      <div className="container pt-7">
        <div className="md:flex md:justify-between text-center text-white">
          <h2 className="font-bold text-[1.4rem] mb-7">Finsweet</h2>

          <div className="mb-7">
            <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:border-b-2 hover:border-primary w-fit"
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>@ Copyright Finsweet 2021</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
