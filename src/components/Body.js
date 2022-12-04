import ProfileImg from "../assets/Aadarsh-profile-image.png";

function Body() {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-white lg:justify-start justify-center items-center lg:pt-20 pt-10">
      <div className="flex flex-col justify-center lg:items-start items-center">
        <p className="text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left text-gray-800 font-[poppins] font-light">Hello, I am</p>
        <p className="text-3xl lg:text-5xl  xl:text-6xl text-center lg:text-left text-gray-800 font-[poppins] font-semibold">Aadarsh Kumar Tiwari</p>
        <br />
        <p className="text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left font-bold text-gray-800 font-[poppins] font-extralight italic">
          Student at IIT(ISM) Dhanbad
        </p>
        <br />
        <a
          href="https://drive.google.com/file/d/1JJZVi_yvkpmbPVeYkixphiy3SkEKkGYh/view?usp=share_link"
          download="pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-gray-800 lg:text-lg xl:text-xl text-sm font-[poppins] mt-2 border-2 rounded-md p-2 hover:bg-gray-800 hover:text-white">
            Download CV
          </button>
        </a>
      </div>
      <div className="flex w-1/2 h-1/2 lg:justify-end justify-center items-center p-5">
        <img className="flex w-full md:w-3/4 lg:w-1/2" src={ProfileImg} alt="aadarshkt"/>
      </div>
      
    </div>
  );
}

export default Body;
