import React from "react";
import wstar from "../assets/img/star.png";

function AboutSection() {
  return (
    <>
      <div className="bg-[#1abc9c] mt-24">
        <div className="w-full flex flex-col justify-center items-center ">
          <h2 className="text-5xl font-bold text-white mt-24">ABOUT</h2>
          <div className="flex flex-row item-center mt-7">
            <div className="w-28 h-1 bg-[#ffffff] mt-auto mb-auto mr-4"></div>
            <img src={wstar} alt="" />
            <div className="w-28 h-1 bg-[#ffffff] mt-auto mb-auto ml-4"></div>
          </div>
          <div className=" flex flex-row justify-center items-center  items-center mt-10 ">
            <p className="text-white text-2xl ml-[20rem] pr-10 ">
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="text-white text-2xl  mr-96">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
          <button className="px-10 text-xl py-5 border-2 border-white text-white rounded-md mt-10 mb-16 hover:bg-[#ffffff] hover:text-black">
            Free Download!
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
