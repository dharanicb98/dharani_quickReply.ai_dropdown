import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <header
      className="bg-[#59665c] text-white h-[70px] w-[100%] z-[10] flex justify-between items-center px-[20px] fixed top-0 left-0 right-0 shadow-sm"
      // style={{ backgroundColor: backgroundColor }}
    >
      <Link to={"/"}>
        <h1 className="text-white text-lg">QuickReply.ai</h1>
      </Link>
      <div className="flex gap-4">
      <Link to={"/"}> <h1 className="text-white text-lg">Search Dropdown</h1></Link>
        <Link to={"/iconbar"}> <h1 className="text-white text-lg">Icon-Bar Dropdown</h1></Link>
        <Link to="/checkbox"> <h1 className="text-white text-lg">Checkbox Dropdown</h1></Link>
        <Link to="/radio"> <h1 className="text-white text-lg">Radio Dropdown</h1></Link>
      </div>
    </header>
  );
};

export default Navber;
