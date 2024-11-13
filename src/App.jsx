import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import {InfoSection} from "./components/InfoSection.jsx";
import {
  computerVisionContent,
  fixingBugsContent,
  librariesContent,
  walkThrough,
} from "./lib/utils/moduleTwo.utils.js";
import {SubmitWork} from "./components/SubmitWork.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <InfoSection sectionId={'fixing-bugs'} content={fixingBugsContent} isFirst />
        <InfoSection sectionId={'libraries'} content={librariesContent} />
        <InfoSection sectionId={"computer-vision"} content={computerVisionContent} />
        <InfoSection sectionId={"walkthrough"} content={walkThrough} />
        <SubmitWork />
      </div>

      <ButtonGradient/>
    </>
  );
};

export default App;
