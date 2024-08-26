import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCirclePlay } from "react-icons/fa6";
import video from '../img/vedio.mp4'; // Note the corrected spelling from 'vedio' to 'video'
import { services } from '../constants/datas';
import tag from '../img/protag1.png'
import servicetag from '../img/tag.png'
 function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePlayClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
    setTimeout(() => {
      setIsVideoPlaying(false);
    }, 8000);
  };
  const isLastImage = currentIndex === services.length - 1;

  return (
    <div className="relative w-full h-full  overflow-x-hidden">
      {!isVideoPlaying && (
        <>
          <div className='w-full h-fit flex absolute top-0 bg-transparent items-start justify-between gap-3 p-2'>
            <motion.button
              className='flex items-end p-2 rounded-full z-40 overflow-hidden'
              onClick={handlePlayClick}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              initial={{ width: "fit-content" }}
              animate={{ width: isHovering ? "auto" : "" }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaCirclePlay className='text-blue-400 text-2xl' />
              </motion.span>
              <div className="flex ml-1">
                {'play now'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isHovering ? 1 : 0,
                      x: isHovering ? 0 : -10,
                    }}
                    transition={{ duration: 0.3, delay: isHovering ? index * 0.05 : 0 }}
                    className="text-red-100"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.button>
            <div className="absolute top-[-7px] bg-white rounded-lg right-0 z-40">
      {isLastImage ? (
        <motion.img
          key={currentIndex} // This key ensures the image component re-renders on index change
          src={servicetag}
          alt="Service Tag"
          className="md:h-12 h-10 w-auto z-40"
          initial={{ opacity: 0, x: -20 }} // Initial state
          animate={{ opacity: 1, x: 0 }}   // Animate to visible state
          transition={{ duration: 0.5 }}    // Transition timing
        />
      ) : (
        <img
          src={tag}
          alt="Tag"
          className="md:h-12 h-10 w-auto z-40"
        />
      )}
    </div>


          </div>
        </>
      )}

      {isVideoPlaying ? (
        <motion.video
          src={video} // Replace with your video URL
          autoPlay
          muted
          initial={{ opacity: 0.6, x: 100 }}
          animate={{ opacity: 0.5, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full object-cover z-50"
        />
      ) : (
        <motion.img
          key={`image-${currentIndex}`}
          src={services[currentIndex].image}
          alt="Slider Image"
          initial={{ opacity: 0.0, x: 20 }}
          animate={{ opacity: 0.5, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full object-cover z-50"
        />
      )}

      {!isVideoPlaying && (
        <div className="absolute inset-0 flex flex-col md:gap-4 gap-2 items-start justify-end text-start bg-gradient-to-t from-black to-transparent text-white p-4">
          <motion.h2
            key={`heading-${currentIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="md:text-[28px] text-[22px] font-bold mb-2 leading-tight bg-clip-text"
            style={{ lineHeight: 1 }}
          >
            {
              (() => {
                const heading = services[currentIndex].heading;
                const [beforeBracket, afterBracket] = heading.split('(');
                const cleanedAfterBracket = afterBracket ? afterBracket.replace(')', '') : '';
                return (
                  <>
                    {beforeBracket.trim().toUpperCase()}
                    {cleanedAfterBracket && (
                      <>
                        <span className="text-stone-200  md:text-[23px] text-[18px] font-light"> {" - "}{cleanedAfterBracket.trim()}</span>
                      </>
                    )}
                  </>
                );
              })()
            }
          </motion.h2>

          <motion.h4
            key={`tagline-${currentIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="md:text-[20px] text-[16px] font-bold mb-2 leading-tight"
            style={{ lineHeight: 1 }}
          >
            {services[currentIndex].Tagline}
          </motion.h4>

          <motion.p
            key={`paragraph-${currentIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{ lineHeight: 1.2 }}
            className="md:text-lg text-xs leading-3 ps-1 font-normal text-stone-400 border-s-2 border-red-600"
          >
            {services[currentIndex].paragraph}
          </motion.p>

          <div className='flex items-center w-full justify-between'>
          <a 
  className="w-fit text-cyan-500" 
  target="_blank" 
  href="https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+TL-+PRODUCTS+%26+SERVICES&type=phone_number&app_absent=0" 
  rel="noopener noreferrer"
>
  Learn More
</a>
            <div className="flex w-fit gap-2 justify-center">
              {services.map((_, index) => (
                <div
                  key={`indicator-${index}`}
                  className={`h-2 rounded-full transition-all duration-500 ease-in-out ${currentIndex === index ? 'w-10 bg-stone-300 transition-all duration-500' : 'w-2 bg-stone-600 transition-all duration-500'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
