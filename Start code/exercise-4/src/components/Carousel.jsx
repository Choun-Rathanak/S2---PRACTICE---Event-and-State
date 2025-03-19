import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
 const [currentIndex,setCurrentIndex] = useState(0);
  /* You will need to hanle the click on left and right button */
const handleLeftClick = () => {

  if(currentIndex == 0){
    setCurrentIndex(images.length - 1);
  }else {
    setCurrentIndex(currentIndex -1 );
  }
};

const handleRightClick = () => {
  if (currentIndex === images.length - 1) {
    setCurrentIndex(0); 
  } else {
    setCurrentIndex(currentIndex + 1); 
  }
};
 

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftClick}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightClick} />
    </div>
  );
};
