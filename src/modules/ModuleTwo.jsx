import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import Hero from "../components/Hero";
import {InfoSection} from "../components/InfoSection.jsx";
import {
  computerVisionContent,
  fixingBugsContent,
  librariesContent, module2NavItems, results,
  walkThrough,
} from "../constants/moduleTwoScript.constants.js";
import {SubmitWork} from "../components/SubmitWork.jsx";
import {module2Thumb, moduleTwoVideo} from "../assets/index.js";

export default function ModuleTwo({ moduleNumber }) {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header navigation={module2NavItems} />
        <Hero video={moduleTwoVideo} videoThumbnail={module2Thumb} title={"Building a Security Camera using Computer Vision"} subHeading={"Discover how motion detection with python can be applied to real world scenarios"} />
        <InfoSection sectionId={'fixing-bugs'} content={fixingBugsContent} isFirst />
        <InfoSection sectionId={'libraries'} content={librariesContent} />
        <InfoSection sectionId={"computer-vision"} content={computerVisionContent} />
        <InfoSection sectionId={"walkthrough"} content={walkThrough} />
        <InfoSection sectionId={"results"} content={results} />
        <SubmitWork moduleNumber={moduleNumber} />
      </div>

      <ButtonGradient/>
    </>
  )
}