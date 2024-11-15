import Text from "../../components/Text.jsx";
import React from "react";

export function displayTitle(title, isDarkMode) {
  return <Text data-aos="fade-right" component={"h2"} variant={"h2"} className={`pb-8 ${isDarkMode ? '' : 'text-black'}`}>{title}</Text>;
}

export function displayImages(images) {
  return (
    <div className={'flex flex-col lg:flex-row justify-center gap-8 py-8'}>
      {images.map((image, index) => (
        <img key={index} src={image.image} alt={image.alt} className={`object-contain border-2 border-dashed border-secondary w-full ${images.length > 1 ? 'lg:max-w-[45%]' : 'lg:max-w-[80%]'} rounded-2xl`} />
      ))}
    </div>
  );
}

export function displayList(list, isDarkMode) {
  return (
    <ul>
      {list.map((listItem, index) => (
        <React.Fragment key={index}>
          {listItem.bulletPoint && <li className={`${isDarkMode ? '' : 'text-black'}`} data-aos="fade">{listItem.bulletPoint}</li>}
          {listItem.images && displayImages(listItem.images)}
        </React.Fragment>
      ))}
    </ul>
  );
}