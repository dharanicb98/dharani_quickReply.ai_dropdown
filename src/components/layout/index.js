import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#59665c] text-white h-[70px] w-full z-[10] flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 fixed top-0 left-0 right-0 shadow-sm">
      <Link to="/">
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">QuickReply.ai</h1>
      </Link>
      <nav className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <Link to="/">
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Search Dropdown</h2>
        </Link>
        <Link to="/iconbar">
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Icon-Bar Dropdown</h2>
        </Link>
        <Link to="/checkbox">
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Checkbox Dropdown</h2>
        </Link>
        <Link to="/radio">
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Radio Dropdown</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
