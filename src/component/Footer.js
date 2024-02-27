import React from "react";
import call from "../asserts/phone-solid.svg";
import facebook from "../asserts/facebook.svg";
import world from "../asserts/globe-solid.svg";

const Footer = () => {
  return (
    <div className="bg-red-600 py-9 flex px-[10px] justify-center  gap-y-6 flex-wrap text-white">
    <div className="icon flex justify-center mr-20 items-center ">
    <img className="w-8 mr-3" src={call} />
      <h3>Toll free 1800 200 1234</h3>
    </div>
      <div className="icon flex justify-center mr-20 items-center">
      <img className="w-9 mr-3" src={facebook} />
      <h3>www.facebook.com/cripumps</h3>
      </div>
      <div className="icon flex justify-center mr-20 items-center">
      <img className="w-9 mr-3" src={world} />
      <h3>www.crigroups.com</h3>
      </div>
  
    </div>
  );
};

export default Footer;
