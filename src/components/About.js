import React from "react";
import {
  Player,
  Controls,
} from "@lottiefiles/react-lottie-player";

const About = () => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl lg:text-5xl xl:text-6xl text-gray-800 font-[poppins] font-semibold">
        About
      </p>
      <div className="flex lg:flex-row flex-col w-full h-full items-center">
        <div className="flex justify-center lg:justify-start  w-full lg:w-2/3 xl:w-full">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_m9lwcxrc.json"
            style={{
              height: "80%",
              width: "100%",
            }}>
            <Controls
              visible={false}
              buttons={[
                "play",
                "repeat",
                "frame",
                "debug",
              ]}
            />
          </Player>
        </div>
        <div className="flex bg-white lg:w-1/2 w-full rounded-3xl p-10 m-10 shadow-xl">
          <p className="lg:text-xl xl:text-2xl text-gray-800 font-[poppins] font-light">
            Welcome to my portfolio, I
            am{" "}
            <b>Aadarsh Kumar Tiwari</b>,
            Final year student at{" "}
            <b>IIT(ISM) Dhanbad</b>.
            <br />
            <br />
            I love to code and work on
            projects that make a
            difference. I also compete
            in coding competitions as
            well as learn about new
            technologies in free time.
            <br />
          </p>
        </div>
      </div>
      <hr className="mx-auto w-1/4 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700" />
    </div>
  );
};

export default About;
