import React from "react";
import medal from "../asserts/medal.png";
import peoples from "../asserts/peoples.png";
import logo from "../asserts/logo.png";
const MainPage = () => {
  return (
    <div>
      <div className="logo-container mb-1">
        <img className="logo" src={logo} />
      </div>
      <div className="mainPage">
        <div className="medal-container flex justify-center items-center">
          <img className="medal " src={medal} />
        </div>
        <div className="main-content">
          <div className="p-5">
            <h3 className="font-bold mb-2 px-3">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>

            <ul className="list-disc">
              <li className="ml-8 font leading-tight">
                {" "}
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li className="ml-8 font-medium leading-tight">
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>

            <img className="my-3" src={peoples} />
            <h5 className="font-medium leading-tight">
              Government of India has awarded the{" "}
              <span className="font-bold">
                "National Energy Conservation Award 2018".
              </span>{" "}
              Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
              the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
              Raj Kumar Singh, Honorable Minister of State.
            </h5>
          </div>
        </div>
      </div>
      <h5 className=" my-3 px-3 font-medium leading-tight text-center">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </h5>
    </div>
  );
};

export default MainPage;
