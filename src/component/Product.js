import React from "react";
import product from "../asserts/Product.png";
const Product = () => {
  return (
    <div>
      <div className="flex flex-col  items-center ">
        <img className="w-[80%] " src={product} />
        <h5 className="my-3 px-3 font-medium leading-tight">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </h5>
        <div className="horizontalLine" />
      </div>
      <div>
        <h2 className="text-center m-3 font-bold leading-tight">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h2>
        <h5 className="text-center mb-5 font-medium leading-tight px-3">
          CHEMICALS & PROCESS <div className="verticalLine"></div> POWER{" "}
          <div className="verticalLine"></div> WATER & WASTE WATER{" "}
          <div className="verticalLine"></div> OILS & GAS{" "}
          <div className="verticalLine"></div> PHARMA{" "}
          <div className="verticalLine"></div> SUGARS & DISTILLERIES{" "}
          <div className="verticalLine"></div> PAPER & PULP{" "}
          <div className="verticalLine"></div> MARINE & DEFENCE{" "}
          <div className="verticalLine"></div> METAL & MINING FOOD{" "}
          <div className="verticalLine"></div>FOOD & BEVERAGE{" "}
          <div className="verticalLine"></div> PETROCHEMICAL & REFINERIES{" "}
          <div className="verticalLine"></div> SOLAR{" "}
          <div className="verticalLine"></div> BUILDING{" "}
          <div className="verticalLine"></div> HVAC{" "}
          <div className="verticalLine"></div> FIRE FIGHTING{" "}
          <div className="verticalLine"></div>
          AGRICULTURE & RESIDENTIAL
        </h5>
      </div>
    </div>
  );
};

export default Product;
