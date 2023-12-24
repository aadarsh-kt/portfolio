import { useState } from "react";
import ProfileImg from "../assets/Profile_photo.png";

function Body() {
  const [loading, setLoading] = useState(true);

  const handle_image_on_load = () => {
    setLoading(false);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-white lg:justify-start justify-center items-center lg:pt-20 pt-10">
      <div className="flex flex-col justify-center lg:items-start items-center">
        <p className="text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left text-gray-800 font-[poppins] font-light">
          Hello, I am
        </p>
        <p className="text-3xl lg:text-5xl  xl:text-6xl text-center lg:text-left text-gray-800 font-[poppins] font-semibold">
          Aadarsh Kumar Tiwari
        </p>
        <br />
        <p className="text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left font-bold text-gray-800 font-[poppins] font-extralight italic">
          Student at IIT(ISM) Dhanbad
        </p>
        <br />
        <a
          href="https://docs.google.com/document/d/1jTZYblJRap0K61-xxJNT54FzLUnuuP0p8L-dctnns-k/edit?usp=sharing"
          download="pdf"
          target="_blank"
          rel="noopener noreferrer">
          <button className="text-gray-800 lg:text-lg xl:text-xl text-sm font-[poppins] mt-2 border-2 rounded-md p-2 hover:bg-gray-800 hover:text-white">
            Download CV
          </button>
        </a>
      </div>
      <div
        className="flex rounded-full w-1/2 h-1/2 lg:justify-end justify-center 
      items-center p-5">
        <div
          className="flex rounded-full w-full md:w-3/4 bg-blue-100 items-center justify-center
        lg:w-1/2 p-2">
          {loading && <p>Loading...</p>}
          <img onLoad={handle_image_on_load} src={ProfileImg} alt="aadarshkt" />
        </div>
      </div>
    </div>
  );
}

export default Body;
