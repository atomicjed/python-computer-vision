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
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebaseSingleton.js";

export default function ModuleTwo({ moduleNumber }) {
  const [submittedWork, setSubmittedWork] = useState([]);

  useEffect(() => {
    void fetchSubmittedWork();
  }, []);

  async function fetchSubmittedWork() {
    try {
      const submittedWorkCollectionRef = collection(db, `Module${moduleNumber}`);
      const submittedWorkDocs = await getDocs(submittedWorkCollectionRef);

      const data = submittedWorkDocs.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log('Submitted Work:', data);
      setSubmittedWork(data);
    } catch(e) {
      console.error('Error fetching work:', e);
    }
  }
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
        <SubmitWork moduleNumber={moduleNumber} onUpdate={fetchSubmittedWork} submittedWork={submittedWork} />
      </div>

      <ButtonGradient/>
    </>
  )
}