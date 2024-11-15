import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import {InfoSection} from "../components/InfoSection.jsx";
import {
  computerVisionContent,
  fixingBugsContent,
  librariesContent,
  results,
  walkThrough
} from "../lib/utils/moduleTwo.utils.js";
import {SubmitWork} from "../components/SubmitWork.jsx";
import ButtonGradient from "../assets/svg/ButtonGradient.jsx";

export default function ModuleOne() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero title={"Python Basics"} subHeading={"\"Fear not the man who has practiced 10,000 kicks once, fear the man who has practiced one kick 10,000 times.\""} />
        <InfoSection sectionId={'fixing-bugs'} content={fixingBugsContent} isFirst />
        <InfoSection sectionId={'libraries'} content={librariesContent} />
        <InfoSection sectionId={"computer-vision"} content={computerVisionContent} />
        <InfoSection sectionId={"walkthrough"} content={walkThrough} />
        <InfoSection sectionId={"results"} content={results} />
        <SubmitWork />
      </div>

      <ButtonGradient/>
    </>
  );
}