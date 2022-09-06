import ProfileImg from "../assets/Aadarsh-profile-image.png";

function Body() {
  return (
    <div className="flex flex-row h-screen bg-white">
      <div className="flex flex-col w-full h-full justify-center items-start">
        <p className="text-4xl text-gray-800 font-[poppins] font-medium">
          Hello, I am
        </p>
        <p className="text-5xl text-gray-800 font-[poppins] font-semibold">
          Aadarsh Kumar Tiwari
        </p>
        <br />
        <p className="text-4xl font-bold text-gray-800 font-[poppins] font-extralight italic">
          Student at IIT(ISM) Dhanbad
        </p>
        <br />
        <button className="text-gray-800 font-[poppins] mt-2 border-2 rounded-md p-2 hover:bg-gray-800 hover:text-white">
          Download CV
        </button>
      </div>
      <div className="flex w-full h-full justify-center pt-20 items-start">
        <img className="flex w-1/2" src={ProfileImg} alt="Profile image" />
      </div>
    </div>
  );
}

export default Body;
