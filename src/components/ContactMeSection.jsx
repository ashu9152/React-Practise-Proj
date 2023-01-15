import React from "react";
import bstar from "../assets/img/bstar.png";

function ContactMeSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-24">
        <h3 className=" text-5xl font-bold text-[#2c3e50]">CONTACT ME</h3>
        <div className="flex flex-row item-center mt-7">
          <div className="w-28 h-1 bg-[#2c3e50] mt-auto mb-auto mr-4"></div>
          <img src={bstar} alt="" />
          <div className="w-28 h-1 bg-[#2c3e50] mt-auto mb-auto ml-4"></div>
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <div class="container px-5 py-24 mx-auto flex">
          <div class=" md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative ">
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-[#1ABC9C] focus:ring-2 focus:ring-[#1ABC9C] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email <address></address>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-[#1ABC9C] focus:ring-2 focus:ring-[#1ABC9C] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Phone number
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-[#1ABC9C] focus:ring-2 focus:ring-[#1ABC9C]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-[#1ABC9C] focus:ring-2 focus:ring-[#1ABC9C]  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-[#1ABC9C] border-0 py-2 px-6 focus:outline-none  rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMeSection;
