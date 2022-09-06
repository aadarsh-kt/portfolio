import React from "react";
import CodeforcesLogo from "../assets/CodeforcesLogo";

const CodingCompetitions = () => {
  return (
    <div className="flex flex-col">
      <p className="text-5xl text-white font-[poppins] font-semibold">
        Sport Programming
      </p>
      <div className="flex bg-white justify-center items-center mt-20 mb-20 mr-20 w-2/3 h-full rounded-2xl">
        <div className="flex bg-white p-5 w-5/6 h-1/2">
          <CodeforcesLogo />
        </div>
      </div>
    </div>
  );
};

function CodingCard({ children }) {
  return (
    <div className="flex flex-row w-full h-full bg-white rounded-3xl p-20">
      {children}
    </div>
  );
}

export default CodingCompetitions;
