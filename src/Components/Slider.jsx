import React, { useState, useEffect ,Suspense } from 'react';
import { motion } from 'framer-motion';
import { services, documents } from '../constants/datas'; // Import services and documents
import tag from '../img/protag1.png';
import servicetag from '../img/tag.png';
import { IoCloseCircle } from 'react-icons/io5';
import { FaFilePdf } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Typewriter from 'typewriter-effect';
import { PDFViewer } from './Document';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBrochureVisible, setIsBrochureVisible] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null); // State for selected PDF
  const [drop, setDrop] = useState(false); // For dropdown visibility

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleBrochureClick = () => {
    setIsBrochureVisible(!isBrochureVisible); // Toggle brochure visibility
  };

  const handleDocumentSelect = (doc) => {
    setSelectedDocument(doc); // Set the selected document
    setIsBrochureVisible(true); // Show the PDF viewer
  };

  const isLastImage = currentIndex === services.length - 1;

  // Helper function to split heading and style accordingly
  const splitHeading = (heading) => {
    const parts = heading.split('(');
    if (parts.length > 1) {
      return (
        <>
          {parts[0].trim()} 
          <span className="text-sm font-medium">{" "}- {" "}{parts[1].replace("("," ").replace(")"," ")}</span>
        </>
      );
    }
    return heading;
  };

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {/* Button to show documents */}
      {!isBrochureVisible && (
        <>
          <div className="w-full h-fit flex absolute top-0 bg-transparent items-start justify-between gap-3 p-2">
            <motion.button 
              onMouseEnter={() => setDrop(true)} 
              onMouseLeave={() => setDrop(false)} 
              className="relative flex items-end p-2 rounded-full z-40 md:w-[40%] w-[60%]"
              onClick={() => setDrop(true)} 
              transition={{ duration: 0.5 }}
            >
              <div className={`text-black flex gap-2 md:text-base text-xs justify-between items-center rounded-md bg-white bg-opacity-70 transition-all px-3 py-2 duration-300 ${drop && "bg-stone-100 bg-opacity-100"}`}>
                <div className="flex gap-2 justify-center items-center">
                  <FaFilePdf className="text-red-500" />
                  <span className="md:text-xs text-[10px]">Learn More</span>
                </div>
                <MdOutlineKeyboardArrowDown className=' rounded-full bg-black text-white text-xl' />
              </div>

              {drop && (
                <div className="absolute top-full w-full flex flex-col gap-1 bg-white rounded-md bg-opacity-50 p-1 text-xs shadow-md z-50">
                  {documents
                    .sort((a, b) => a.name.localeCompare(b.name)) // Sort documents alphabetically
                    .map((doc) => (
                      <button 
                        key={doc.id} 
                        className="text-stone-950 md:text-xs text-[10px] w-full p-1 rounded-md bg-white shadow-lg hover:text-white hover:bg-stone-950 transition-all duration-300"
                        onClick={() => handleDocumentSelect(doc.file)}
                      >
                        {doc.name}
                      </button>
                    ))}
                </div>
              )}
            </motion.button>

            <div className="absolute top-[-7px] bg-white rounded-lg right-0 z-40">
              {isLastImage ? (
                <motion.img
                  key={currentIndex}
                  src={servicetag}
                  alt="Service Tag"
                  className="md:h-12 h-10 w-auto z-40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <img src={tag} alt="Tag" className="md:h-12 h-10 w-auto z-40" />
              )}
            </div>
          </div>
        </>
      )}

      {/* PDF Viewer or Coming Soon */}
      {isBrochureVisible && selectedDocument !== null ? (
        <div className="w-full h-full flex justify-center relative items-center">
         <Suspense >
            <iframe
              src={selectedDocument} // Show the selected PDF
              className="w-full h-full"
              title="Brochure"
            />
          </Suspense>
          
          {/* Close button */}
          <div className="absolute bottom-4 left-5">
            <button
              className="border border-black flex gap-2 text-2xl bg-white shadow-md text-red-500 p-2 rounded-full z-50"
              onClick={() => setIsBrochureVisible(false)} // Close the PDF viewer
            >
              <IoCloseCircle />
            </button>
          </div>
        </div>
      ) : isBrochureVisible && selectedDocument === null ? (
        <div className="w-full h-full relative flex bg-stone-50 justify-center items-center text-3xl font-bold text-red-500">
           <button
              className=" absolute bottom-0 left-0 flex gap-2 text-2xl  shadow-md text-red-500 p-2 rounded-full z-50"
              onClick={() => setIsBrochureVisible(false)} // Close the PDF viewer
            >
              <IoCloseCircle />
            </button>
            <Typewriter
          options={{
            strings: [
              'Coming Soon',
              'Stay tune !',
              
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50, // speed at which text is erased
          }}
        />
        </div>
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

      {/* Content below the image */}
      {!isBrochureVisible && (
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
            {splitHeading(services[currentIndex].heading)}
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

          <div className="flex items-center w-full justify-between">
            <a
              className="w-fit text-transparent"
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
                  className={`h-2 rounded-full transition-all duration-500 ease-in-out ${currentIndex === index ? 'w-10 bg-stone-500' : 'w-2 bg-stone-800'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
