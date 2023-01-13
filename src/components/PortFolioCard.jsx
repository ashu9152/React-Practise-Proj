import React from "react";
import bstar from "../assets/img/bstar.png";
import cabin from "../assets/img/portfolio/cabin.png";
import cake from "../assets/img/portfolio/cake.png";
import circus from "../assets/img/portfolio/circus.png";
import game from "../assets/img/portfolio/game.png";
import safe from "../assets/img/portfolio/safe.png";
import submarine from "../assets/img/portfolio/submarine.png";

function PortFolioCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-24">
        <h3 className=" text-5xl font-bold text-[#2c3e50]">PORTFOLIO</h3>
        <div className="flex flex-row item-center mt-7">
          <div className="w-28 h-1 bg-[#2c3e50] mt-auto mb-auto mr-4"></div>
          <img src={bstar} alt="" />
          <div className="w-28 h-1 bg-[#2c3e50] mt-auto mb-auto ml-4"></div>
        </div>
      </div>
      <div className=" flex flex-wrap gap-10 mt-14 justify-center items-center ">
        <img src={cabin} className="w-96 h-72  rounded-md" alt="" />
        <img src={cake} className="w-96 h-72 rounded-md" alt="" />
        <img src={circus} className="w-96 h-72 rounded-md" alt="" />
      </div>
      <div className=" flex flex-wrap gap-10 mt-14 justify-center items-center ">
        <img src={game} className="w-96 h-72  rounded-md" alt="" />
        <img src={safe} className="w-96 h-72 rounded-md" alt="" />
        <img src={submarine} className="w-96 h-72 rounded-md" alt="" />
      </div>
    </>
  );
}

export default PortFolioCard;
