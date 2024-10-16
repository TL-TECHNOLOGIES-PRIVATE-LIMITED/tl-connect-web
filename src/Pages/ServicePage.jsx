import React, { useEffect, useState, useRef } from 'react';
import ServiceCard from '../Components/ServiceCard';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ProductCard from '../Components/ProductCard';
import logo from '../img/Logo-TL.png';
import { RiServiceFill } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import bg from '../img/2148192441.jpg'
const TLServices = () => {
    const navigate = useNavigate();
    const productSectionRef = useRef(null); // Create a ref for the product section
    const serviceSectionRef = useRef(null); // Create a ref for the product section

    const taglines = [
        "Empowering Your Business with Strategic Consulting",
        "Driving Success Through Digital Marketing",
        "Innovating IT Solutions for a Digital Future",
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === taglines.length - 1 ? 0 : prev + 1));
        }, 3000); // Change text every 3 seconds
        return () => clearInterval(interval);
    }, [taglines.length]);

    const handleScrollToProducts = () => {
        if (productSectionRef.current) {
            productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToServices = () => {
        if (serviceSectionRef.current) {
            serviceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white text-center relative">
            <section className="fixed flex justify-between items-end top-0 md:px-10 px-4 py-4 w-full z-20">
                <div className="flex gap-4 w-full items-center">
                    <div className="text-3xl h-fit w-fit rounded-full text-[50px]">
                        <img src="https://tltechnologies.net/assets/images/logo.svg" alt="" className="h-14 w-auto" />
                    </div>
                    <div className="md:text-[36px] text-xl font-bold text-[white] drop-shadow-md">
                        TL TECHNOLOGIES
                    </div>
                </div>
                <button className='md:flex-row flex-col flex text-white items-center ' onClick={() => navigate("/")}>
                connect <HiArrowNarrowLeft className='md:text-5xl text-2xl hover:text-red-500 transition-all flex duration-500' />
                </button>
            </section>

            <section
                style={{
                    backgroundImage: `url(${bg})`,
                }}
                className="fixed  top-0 left-0 w-full md:h-[55vh] h-[55vh] bg-cover bg-center z-10 flex flex-col justify-center items-center "
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black flex flex-col opacity-70 z-0 " />

                <div className="flex flex-col  md:gap-6 gap-4 md:py-8 py-4 z-10 justify-end w-full items-start h-full md:px-10 px-4 ">
                    <h2 style={{ lineHeight: 1.1 }} className="md:text-[60px] text-stone-300 text-[35px] font-bold text-start">
                        Comprehensive Digital Solutions for <br /> Your Business Needs
                    </h2>
                    <div className='w-full flex gap-4 justify-between flex-wrap'>
                        <div className="flex items-center w-fit justify-center">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={current}
                                    className="md:text-[20px] text-stone-50 text-[20px] font-light text-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {taglines[current]}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        <div className="flex gap-4 text-white">
                            <button className='px-3 py-1 h-fit bg-stone-50 text-black rounded-full text-sm hover:bg-red-500 hover:text-white transition-all duration-500  font-bold flex items-center gap-2' onClick={handleScrollToServices}><RiServiceFill/>SERVICES</button>
                            <button className='px-3 py-1 h-fit bg-stone-50 text-black rounded-full text-sm hover:bg-red-500 hover:text-white transition-all duration-500  font-bold flex items-center gap-2' onClick={handleScrollToProducts}><FaOpencart/>PRODUCTS</button>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={serviceSectionRef}    className="relative w-full  bg-white z-30 mt-[calc(55vh)] ">
              {/* <img src={logo} className='h-[450px] absolute z-10 top-0 right-0' alt="" /> */}
                <div className="container mx-auto"  >
                    <ServiceCard />
                </div>
            </section>

            <section ref={productSectionRef}   className="relative w-full  bg-white z-30"> {/* Attach ref here */}
                <div className="container mx-auto">
                    <ProductCard />
                </div>
            </section>
            <footer className="col-span-full text-black font-bold py-4 z-10">
        <div className="container mx-auto">
          <p className="text-md">
          COPYRIGHT © 2024              <a
              href="https://connect.tltechnologies.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 ml-1 font-bold"
            >
              TL TECHNOLOGIES PVT LTD.
            </a>{" "}
            ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
        </div>
    );
};

export default TLServices;
