import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { serviceCard, taglines } from "../constants/datas";
import bg from '../img/PatternBackground.jpg' 
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceCard() {
  const [isHovered, setIsHovered] = useState(-1);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const serviceDescriptions = [
    "Website & Digital Solutions: From custom software and mobile apps to ERP systems and eCommerce platforms, we handle domain, hosting, SSL, and payment integrations to ensure smooth online operations.",
    
    "Branding & Design: Crafting memorable identities with services like logo design, YouTube reels, and marketing materials (flex boards, catalogues, brochures, business cards) that enhance your brand’s visibility.",
    
    "IT & Security Services: Offering advanced cybersecurity, cloud management, IT consulting, data analytics, AI, and blockchain solutions to protect and optimize your business.",
    
    "Pharmaceutical Design: Specialized in creating compliant medicine labels and leaflets, ensuring clarity and regulatory adherence."
  ];
  
  
  return (
    <div   className="md:px-10 px-2 z-[60] pt-10 mx-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 max-w-8xl">
      <h1 className="col-span-full md:text-[50px] text-[35px]  font-bold  text-[red] text-start ">
        OUR SERVICES
      </h1>
      <p
        className="md:text-[30px] text-[25px] col-span-full max-w-6xl font-bold  text-start"
       
        style={{ lineHeight: 1.1 }}
      >
At TL Technologies, we deliver innovative IT solutions and expert consultancy tailored to your business needs. Our services encompass:

      </p>
      <div className="col-span-full">
  <ul className="w-fit bg-opacity-90 text-black md:text-xl text-[15px] md:px-8 px-2 space-y-5 rounded-2xl">
    {serviceDescriptions.map((description, index) => {
      const [title, details] = description.split(":");
      return (
        <li 
        key={index} 
        className="text-start" 
        
      >
        <span className="font-bold text-red-600">{title}:</span>
        {details}
      </li>
      
      );
    })}
  </ul>
</div>
<p
        style={{ lineHeight: 1.1 }}
       
        className="md:text-[40px]  text-[35px] col-span-full text-stone-950 font-bold text-start text-opacity-50"
      >
        Empower your business with our comprehensive and expert services.
      </p>

    
{serviceCard.map((service, index) => {
        const [beforeBracket, afterBracket] = service.title.split('(');
                return (
        <motion.button
          key={index}
          className="p-6 shadow-lg  relative bg-cover bg-center overflow-hidden h-72 flex flex-col justify-center items-center group"
          style={{ backgroundImage: `url(${service.bgImage})`,marginTop:`${index*2}px` }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: isHovered === index ? 1 : 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(-1)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 "></div>

          <motion.h4
  className="text-2xl font-bold text-start mb-4 absolute bottom-0 left-2 text-white px-2 rounded-2xl z-10"
  initial={{ opacity: 1 }}
  animate={{ 
    scale: isHovered === index ? 1.05 : 1, 
    color: isHovered === index ? "#D1D5DB" : "#FFFFFF" // Use hex codes for color
  }}
  transition={{ duration: 0.3 }}
>
  {beforeBracket}
  {afterBracket ? (
    <>
      <br />
      ({afterBracket})
    </>
  ) : null}
</motion.h4>


          <motion.div
            className="text-white text-start font-light opacity-0 group-hover:opacity-100  absolute flex-col inset-0 bg-black  p-6 flex items-center justify-between z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered === index ? 1 : 0 }}
            transition={{ opacity: { duration: 0.3 } }}
          >
            <span className="block">{service.description}</span>
            <motion.a
              className="flex gap-2 bg-stone-50 text-black font-medium px-3 py-1 rounded-full items-center hover:underline"
              target="_blank"
              href={`https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+${service.title}&type=phone_number&app_absent=0`}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: isHovered === index ? 0 : -100, opacity: isHovered === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaWhatsapp className="text-green-500 " /> Let's connect
            </motion.a>
          </motion.div>
        </motion.button>
        );

      })}
    </div>
  );
}

export default ServiceCard;
