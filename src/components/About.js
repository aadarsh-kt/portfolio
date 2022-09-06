import React from 'react'
import { Player, Controls } from "@lottiefiles/react-lottie-player";


const About = () => {
  return (
    <div className='flex flex-col'>
        <p className='text-5xl text-white font-[poppins] font-semibold'>About</p>
        <div className='flex w-full h-full items-start pt-10'>
            <div className='flex justify-start w-1/2'>
            <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_m9lwcxrc.json"
            style={{ height: "80%", width: "100%" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
            </div>
            <div className='flex bg-white w-1/2 rounded-lg p-10 m-10 shadow-xl shadow-gray-600 hover:shadow-2xl hover:shadow-gray-800'>
                <p className='flex text-xl text-gray-800 font-[poppins] font-light'>
                    Welcome to my portfolio, I am Aadarsh Kumar Tiwari, 3rd year student at IIT(ISM) Dhanbad.
                    <br />
                    <br />
                    I love to code and work on projects that make a difference. I also compete in coding competitions as well as learn about new technologies in free time.
                    <br />
                </p>
            </div>
        </div>
    </div>
  )
}

export default About