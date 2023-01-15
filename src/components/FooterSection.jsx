import React from "react";
import fb from "../assets/img/fb-48.png";
import gh from "../assets/img/github-48.png";
import tw from "../assets/img/twitter-48.png";
import ln from "../assets/img/linedin-48.png";

function FooterSection() {
  return (
    <>
      <div className="flex flex-row justify-center intems-center bg-[#2c3e50] gap-52 ">
        <div className="text-center mt-14 mb-14">
          <h2 className="text-white text-2xl font-bold">LOCATION</h2>
          <h2 className="text-white mt-8 text-xl">
            2215 John Daniel Drive <br /> Clark, MO 65243
          </h2>
        </div>
        <div className="text-center mt-14">
          <h2 className="text-white text-2xl font-bold">AROUND THE WEB</h2>
          <div className="flex flex-row justify-center intems-center">
            <img src={fb} alt="" />
            <img src={gh} alt="" />
            <img src={tw} alt="" />
            <img src={ln} alt="" />
          </div>
        </div>
        <div className="text-center mt-14">
          <h2 className="text-white text-2xl font-bold">ABOUT FREELANCER</h2>
          <h2 className="text-white mt-8 text-xl">
            Freelance is a free to use, MIT licensed <br /> Bootstrap theme
            created by <span className="text-[#1ABC9C]">Start Bootstrap.</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
