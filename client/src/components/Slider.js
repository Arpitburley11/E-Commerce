import React, { useState } from 'react';

export default function Slider() {
  const images = [
    // '/img/ModelTry.jpg',
    // '/img/Model2.jpg',
    // '/img/Model3.jpg',
    // '/img/Model4.jpg', 
    // '/img/Model5.jpg',
    // '/img/Model6.jpg',
    // '/img/Model7.jpg',
    // '/img/Model8.jpg',
    // '/img/fp/fp3.jpg'
    '/img/sp/sp5.jpg'
  ]
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    const totalSlides = images.length;
    if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev-1)
    showSlide(currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev+ 1)
    showSlide(currentIndex + 1);
  };

  return (
    <div className="slider">
      <div className="slider-container">
      <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider-icons">
        <div className="slider-icon">
          <i class="ri-arrow-left-line"onClick={prevSlide}></i>
        </div>
        <div className="slider-icon">
          <i class="ri-arrow-right-line"onClick={nextSlide}></i>
        </div>
      </div>
      </div>
    </div>
  );
};

