import AboutMe from "./AboutMe";
import Education from "./Education";
import Experiences from "./Experiences";
import "../App.css";

function Content() {
  return (
    <div className="w-full lg:overflow-y-auto rounded lg:pr-5">
      <AboutMe />
      <Education />
      <Experiences />
    </div>
  );
}

export default Content;
