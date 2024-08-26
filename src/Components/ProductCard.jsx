import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { services, taglines } from "../constants/datas";
import { RiServiceFill } from "react-icons/ri";

function ProductCard() {
  const [isHovered, setIsHovered] = useState(-1);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="md:px-10 px-2 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl">
      <h1
        className="col-span-full  font-bold  md:text-[50px] text-[35px]  text-[red] text-start"
        
      >
        OUR PRODUCTS
      </h1>
      <p
        className="md:text-[30px] text-[25px] col-span-full font-bold text-start"
        
        style={{ lineHeight: 1.1 }}
      >
        We offer a diverse range of cutting-edge solutions designed to meet the
        unique needs of various industries. <br /> Each product is crafted to
        enhance efficiency, streamline processes, and empower your business with
        intuitive, powerful tools.
      </p>
      <div className="col-span-full">
        <ul className="w-fit bg-opacity-90 text-black md:text-xl text-[15px] md:px-10 px-2 space-y-2 rounded-2xl">
          {taglines.map((tagline, index) => {
            const [start, end] = tagline.replace("⭐", "").split(":");
            return (
              <li key={index} className="text-start" >
                <RiServiceFill className="inline-block mr-2" />
                <span className="font-bold text-red-500">{start}:</span>
                {end}
              </li>
            );
          })}
        </ul>
      </div>

      <p
        style={{ lineHeight: 1.1 }}
        
        className="md:text-[40px]  text-[35px] col-span-full text-stone-950 font-bold text-start text-opacity-50"
      >
        Explore our TL products offerings and discover how they can elevate your
        business operations to new heights.
      </p>

      {services.slice(0, -1).map((service, index) => {
        // Split the heading into before and after the "(" character
        const [beforeBracket, afterBracket] = service.heading.split('(');
        const cleanedAfterBracket = afterBracket ? afterBracket.replace(')', '') : '';


        return (
          <motion.button
            key={index}
            className="p-6 shadow-lg relative bg-cover bg-center overflow-hidden h-72 flex flex-col justify-center items-center group"
            style={{ backgroundImage: `url(${service.image})` }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: isHovered === index ? 1 : 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(-1)}
            
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"
             
            ></div>

<motion.h4
  className="text-2xl font-extrabold text-start mb-4 absolute bottom-0 left-2 text-white px-2 rounded-2xl z-10"
  initial={{ opacity: 1 }}
  animate={{
    scale: isHovered === index ? 0.8 : 1,
    color: isHovered === index ? "#D1D5DB" : "#FFFFFF", // Use hex color codes
  }}
  transition={{ duration: 0.3 }}
>
  {beforeBracket}
  {afterBracket ? (
    <>
      <br />
      <span className="text-stone-400 text-xl font-medium">{cleanedAfterBracket}</span>
    </>
  ) : null}
</motion.h4>


            <motion.div
              className="text-white text-start font-light opacity-0 group-hover:opacity-100 absolute flex-col inset-0 bg-black p-6 flex items-center justify-between z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered === index ? 1 : 0 }}
              transition={{ opacity: { duration: 0.3 } }}
            >
              <div>{service.paragraph}</div>
              <motion.a
                className="flex gap-2 items-center bg-stone-50 text-black font-medium px-3 py-1 rounded-full hover:underline"
                target="_blank"
                href={`https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+${service.heading}&type=phone_number&app_absent=0`}
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: isHovered === index ? 0 : -100,
                  opacity: isHovered === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <FaWhatsapp className="text-green-500" /> Let's connect
              </motion.a>
            </motion.div>
          </motion.button>
        );
      })}
    </div>
  );
}

export default ProductCard;
