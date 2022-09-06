import React from "react";
import CPlusPlus from "../assets/CPlusPlus";
import CSS3 from "../assets/CSS3";
import Express from "../assets/Express";
import HTML5 from "../assets/HTML5";
import Javascript from "../assets/Javascript";
import MongoDB from "../assets/MongoDB";
import TailwindCSS from "../assets/TailwindCSS";
import ReactJS from "../assets/ReactJS";
import NodeJS from "../assets/NodeJS";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Skills = () => {
  return (
    <div className="flex flex-col grow">
      <p className="text-5xl text-gray-800 font-[poppins] font-semibold">
        Skills
      </p>
      <div className="flex items-center">
        <div className="flex w-1/2">
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_aibotaxg.json"
            style={{ height: "100%", width: "100%" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
        <div className="flex justify-center w-1/2">
          <div className="grid grid-cols-3 gap-20">
            <div className="bg-gray-100 rounded-full p-4">
              <HTML5 />
            </div>
            <div className="bg-gray-100 rounded-full p-4">
              <CSS3 />
            </div>
            <div className="bg-gray-100 rounded-full p-4">
              <Javascript />
            </div>
            <div className="bg-gray-100 rounded-full p-4">
              <ReactJS />
            </div>
            <div className="bg-gray-100 rounded-full p-4">
              <NodeJS />
            </div>
            <div className="bg-gray-100 rounded-full p-4">
              <Express />
            </div>
            <div className="bg-gray-100 rounded-full p-4">
              <MongoDB />
            </div>
            <div className="bg-gray-100 rounded-full p-4">
              <TailwindCSS />
            </div>
            <div className="bg-gray-100 rounded-full p-4">
              <CPlusPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
