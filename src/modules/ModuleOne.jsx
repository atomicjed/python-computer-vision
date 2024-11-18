import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import {InfoSection} from "../components/InfoSection.jsx";
import {SubmitWork} from "../components/SubmitWork.jsx";
import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import {
  conditionalStatementsContent, dataStructuresContent,
  dataTypesContent, functionsContent, loopsContent, memoryContent, module1NavItems,
  whatIsPythonContent
} from "../constants/moduleOneScript.constant.js";

export default function ModuleOne() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header navigation={module1NavItems}/>
        <Hero title={"Python Basics"}
              subHeading={"\"Fear not the man who has practiced 10,000 kicks once, fear the man who has practiced one kick 10,000 times.\""}/>
        <InfoSection sectionId={'introduction'} content={whatIsPythonContent} isFirst/>
        <InfoSection sectionId={'data-types'} content={dataTypesContent}/>
        <InfoSection sectionId={'conditionals'} content={conditionalStatementsContent}/>
        <InfoSection sectionId={'loops'} content={loopsContent}/>
        <InfoSection sectionId={'functions'} content={functionsContent}/>
        <InfoSection sectionId={'data-structures'} content={dataStructuresContent}/>
        <InfoSection sectionId={'memory'} content={memoryContent}/>
        <SubmitWork/>
      </div>

      <ButtonGradient/>
    </>
  );
}