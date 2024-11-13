import Section from "./Section.jsx";
import Text from "./Text.jsx";
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {displayImages, displayList, displayTitle} from "../lib/utils/displayInfo.utils.jsx";

export function InfoSection({ sectionId, content, isFirst = false }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);
  
  function displayComponent(contentItem) {
    if (contentItem.title) {
      return displayTitle(contentItem.title);
    }
    if (contentItem.text) {
      return <p data-aos="fade-right">{contentItem.text}</p>
    }
    if (contentItem.images) {
      return displayImages(contentItem.images);
    }
    if (contentItem.list) {
      return displayList(contentItem.list);
    } 
    if (contentItem.quote) {
      return <p className={'italic text-amber-100 px-6 sm:px-12'}>{contentItem.quote}</p>
    }
    
    console.error("There was an error in the content json");
  }
  
  

  return (
    <Section
      id={sectionId}
      crosses={!isFirst}
    >
      <div className="container relative z-2 flex px-6 sm:px-12 md:px-24 lg:px-32">
        <div className={"flex flex-col gap-6"}>
          {content.map((contentItem, index) => (
            <React.Fragment key={index}>{displayComponent(contentItem)}</React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}