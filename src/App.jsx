import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ericImage from './eric.png';
import merci from './calc.png';
import irahari from './port.png';
import james from './github.png';
import linked from './linkedin.png';
import Eric from './Ericc.jpg';
import me from './eric.jpg';
import iranzi from './iranzi.jpg';
import mafia from './mafiaeric.jpg';
import sticker1 from './sticker1.jpg';
import sticker2 from './sticker2.jpg';
import sticker3 from './sticker3.jpg';
import sticker4 from './sticker4.jpg';
import sticker5 from './sticker5.jpg';
import sticker6 from './sticker6.jpg';
import sticker7 from './myphoto.jpg';

const App = () => {
  const images = [ericImage, merci, irahari, james, linked,Eric,me,iranzi,mafia,sticker1,sticker2,sticker3,sticker4,sticker5,sticker6,sticker7]; // Array of images
  const [currentImage, setCurrentImage] = useState(images[0]); // Current displayed image
  const [index, setIndex] = useState(0); // Current image index
  const [isExpanded, setIsExpanded] = useState(false); // Toggle expanded view

  // Function to handle next image
  const handleNext = () => {
    const newIndex = (index + 1) % images.length; // Loop back to the first image
    setIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  // Function to handle previous image
  const handlePrev = () => {
    const newIndex = (index - 1 + images.length) % images.length; // Loop back to the last image
    setIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  // Function to toggle expanded view
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4'>
      {/* Gallery Container */}
      <div
        className={`relative ${
          isExpanded ? 'fixed inset-0 z-50 bg-black bg-opacity-90' : 'w-[90%] max-w-md'
        }`}
      >
        {/* Folder/Envelope-like Card */}
        <div
          className={`relative bg-gray-800 p-4 rounded-lg shadow-2xl transform transition-all duration-300 ${
            isExpanded ? 'w-[90vw] h-[90vh]' : 'w-full h-64 cursor-pointer'
          }`}
          onClick={toggleExpand}
        >
          {/* Folded Corner Effect */}
          <div className='absolute top-0 right-0 w-12 h-12 bg-gray-900 clip-path-folder-corner'></div>

          {/* Image Display */}
          <img
            className={`w-full h-full object-cover rounded-lg ${
              isExpanded ? 'rounded-none' : 'rounded-lg'
            }`}
            src={currentImage}
            alt='gallery'
          />
        </div>

        {/* Navigation Buttons */}
        {isExpanded && (
          <>
            <button
              type='button'
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all'
              onClick={handlePrev}
            >
              <AiOutlineLeft size={30} />
            </button>
            <button
              type='button'
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all'
              onClick={handleNext}
            >
              <AiOutlineRight size={30} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Grid */}
      {!isExpanded && (
        <div className='grid grid-cols-5 gap-4 mt-8 w-[90%] max-w-md'>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`cursor-pointer transform transition-all duration-200 hover:scale-105 ${
                idx === index ? 'border-2 border-blue-500' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => {
                setIndex(idx);
                setCurrentImage(images[idx]);
              }}
            >
              <img
                className='w-full h-16 object-cover rounded-lg shadow-md'
                src={img}
                alt={`thumbnail-${idx}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;