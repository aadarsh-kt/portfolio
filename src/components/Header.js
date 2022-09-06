function Header() {
  return (
    <div className="flex flex-row w-full">
      <div className="flex w-1/2">
        <p className="text-lg text-black text-bold font-[poppins]">Portfolio</p>
      </div>
      <div className="flex justify-evenly w-1/2">
        <p className="text-lg text-black text-bold font-[poppins]">About</p>
        <p className="text-lg text-black text-bold font-[poppins]">Skills</p>
        <p className="text-lg text-black text-bold font-[poppins]">Projects</p>
        <p className="text-lg text-black text-bold font-[poppins]">Contact</p>
      </div>
    </div>
  );
}

export default Header;
