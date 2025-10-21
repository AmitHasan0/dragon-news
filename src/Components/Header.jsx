import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 mt-10">
      <img src={logo} className="w-[400px]" alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <div className="flex">
        <p className="text-accent font-semibold">
          {format(new Date(), "EEEE, ")}
        </p>
        <p className="text-accent">{format(new Date(), "MMMM d, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
