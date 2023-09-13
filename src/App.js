import About from "./components/About";
import Body from "./components/Body";
import CodingCompetitions from "./components/CodingCompetitions";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-col p-10">
        <Header />
        <Body />
      </div>
      <div className="flex p-10">
        <About />
      </div>
      <div className="flex p-10">
        <Skills />
      </div>
      <div className="flex p-10">
        <CodingCompetitions />
      </div>
      <div className="flex p-10 w-full bg-gray-800">
        <Contact />
      </div>
    </div>
  );
}

export default App;
