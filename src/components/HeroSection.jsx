import React from "react";
import Avatar from "../assets/img/avataaars.svg";
import wstar from "../assets/img/star.png";

function HeroSection() {
  return (
    <>
      <div className="bg-[#1abc9c] ">
        <div className="w-full flex flex-col justify-center items-center">
          <img className="w-60 h-60 mt-24" src={Avatar} alt="" />
          <h1 className="text-white font-bold text-6xl mt-10">
            START BOOTSTRAP
          </h1>
          <div className="flex flex-row item-center mt-7">
            <div className="w-28 h-1 bg-[#ffffff] mt-auto mb-auto mr-4"></div>
            <img src={wstar} alt="" />
            <div className="w-28 h-1 bg-[#ffffff] mt-auto mb-auto ml-4"></div>
          </div>
          <h3 className="text-white font-semibold text-2xl mt-10 mb-24">
            Graphic Artist - Web Designer - Illustrator
          </h3>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
