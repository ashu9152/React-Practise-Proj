import React from "react";

function Navbar() {
  return (
    <>
      <div>
        <div className="sticky top-0 z-50 bg-[#2c3e50] w-full px-5 py-8 flex flew-row">
          <div className="basis-1/2 text-center ">
            <h2 className="text-white text-3xl font-bold cursor-pointer">
              START BOOTSTRAP
            </h2>
          </div>
          <div className="basis-1/2 flex flex-row justify-center items-center ">
            <h2 className="text-white text-xl font-semibold hover:text-[#1abc9c] cursor-pointer  ">
              PORTFOLIO
            </h2>
            <h2 className="text-white text-xl font-semibold ml-6 hover:text-[#1abc9c] cursor-pointer ">
              ABOUT
            </h2>
            <h2 className="text-white text-xl font-semibold ml-6 hover:text-[#1abc9c] cursor-pointer ">
              CONTACT
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
