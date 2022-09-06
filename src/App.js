import About from "./components/About";
import Body from "./components/Body";
import CodingCompetitions from "./components/CodingCompetitions";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col pl-10 pt-4 h-screen">
        <Header />
        <Body />
      </div>
      <div className="flex p-10 h-screen bg-blue-500">
        <About />
      </div>
      <div className="flex p-10 pt-10 h-screen">
        <Skills />
      </div>
      <div className="flex p-10 pt-10 h-screen bg-blue-500">
        <CodingCompetitions />
      </div>
    </div>
  );
}

export default App;
