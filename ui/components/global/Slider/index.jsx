import React from 'react';
import { useState } from 'react';
import Buttons from './Buttons';
import Pagination from './Pagination';

export default function Slider({ children }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideLength = children.length - 1;

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide === 0 ? activeSlide : children.length - 1);
  };
  const handleNextSlide = () => {
    setActiveSlide(activeSlide === children.length - 1 ? 0 : activeSlide + 1);
  };

  const currentLink = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Buttons prev={handlePrevSlide} next={handleNextSlide} />
      {children}
      <Pagination
        currentDataSlide={slideLength}
        activeSlide={activeSlide}
        currentLink={currentLink}
      />
    </div>
  );
}
