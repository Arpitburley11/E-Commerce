// import React from 'react'

// export default function Slider() {
//     const data = [
//         '/img/Model111.jpg',
//         '/img/Model2.jpg',
//         '/img/Model3.jpg',
//         '/img/Model4.jpg',
//         '/img/Model5.jpg',
//         '/img/Model6.jpg',
//         '/img/Model7.jpg',
//         '/img/Model8.jpg',
//     ]
//     return (
//         <div className='slider'>
//             <div className="container">
//                 {/* <img src={data[0]} alt='' />
//                 <img src={data[1]} alt='' />
//                 <img src={data[2]} alt='' />
//                 <img src={data[3]} alt='' />
//                 <img src={data[4]} alt='' />
//                 <img src={data[5]} alt='' /> */}
//             </div>
//             <div className="slider-icons">
//                 <div className="slider-icon">
//                     <i class="ri-arrow-left-line"></i>
//                 </div>
//                 <div className="slider-icon">
//                     <i class="ri-arrow-right-line"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useState } from 'react';

const Slider = () => {
        const images = [
        '/img/Model111.jpg',
        '/img/Model2.jpg',
        '/img/Model3.jpg',
        '/img/Model4.jpg',
        '/img/Model5.jpg',
        '/img/Model6.jpg',
        '/img/Model7.jpg',
        '/img/Model8.jpg',
    ]
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
    showSlide(currentIndex - 1);
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>Previous</button>
      <button className="next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
