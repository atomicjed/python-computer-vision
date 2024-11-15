import CustomDropzone from "./Dropzone.jsx";
import Section from "./Section.jsx";
import {displayTitle} from "../lib/utils/displayInfo.utils.jsx";
import React from "react";
import Button from "./Button.jsx";
import {useModules} from "../lib/context/modules.context.jsx";

export function SubmitWork() {
  const { isDarkMode } = useModules();
  return (
    <Section crosses>
      <div className={`container relative z-2 flex flex-col px-6 sm:px-12 md:px-24 lg:px-32 ${isDarkMode ? '' : 'text-black'}`}>
        {displayTitle("Submit your Work", isDarkMode)}
        <p data-aos="fade-right" className={"py-6"}>Please drag and drop your work here in any format you prefer (video, PDF, photo, etc.). Once I’ve reviewed it, I’ll release the next module for you.</p>
        <p data-aos={"fade-right"} className={"pb-12"}>Along with your submission, feel free to leave a quick message sharing how you found the module. If you have any specific ideas or projects you’d like to work on in future modules, or any feedback on how I could make the course more engaging, I'd love to hear it!</p>

        <div className={"flex flex-col items-center gap-6"}>
          <CustomDropzone/>
          <textarea className={"border border-white rounded-2xl p-4 w-full lg:w-[80%] min-h-32"}
                    placeholder={"Provide a quick message here.."}></textarea>
          <div className={"lg:w-[80%] flex justify-start w-full"}>
            <Button isDarkMode={isDarkMode}>Submit</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}