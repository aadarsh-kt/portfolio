import { useEffect, useState } from "react";
import About from "./components/About";
import Body from "./components/Body";
import CodingCompetitions from "./components/CodingCompetitions";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Cover from "./components/Cover";

function App() {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-col p-10 mb-40 sm:mb-20 md:mb-32">
        <Cover />
        <Header />
        <Body />
      </div>
      <div className="flex p-10 z-20 bg-white">
        <About />
      </div>
      <div className="flex p-10 z-20 bg-white">
        <Skills />
      </div>
      <div className="flex p-10 z-20 bg-white">
        <CodingCompetitions />
      </div>
      <div className="flex p-10 w-full bg-gray-800 z-20 bg-opacity-80">
        <Contact />
      </div>
    </div>
  );
}

export default App;
