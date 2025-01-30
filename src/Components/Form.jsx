import React, { useEffect, useState } from "react";
import TooltipButton from "./ToolTipButton";
import PhoneInput from "react-phone-input-2";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaRegUser,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {  FaLocationDot } from "react-icons/fa6";
import { TbMessageCircle2Filled } from "react-icons/tb";

import { IoBriefcase } from "react-icons/io5";
import CountryStates from "./countryState";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { SiGooglemybusiness } from "react-icons/si";
import "react-phone-input-2/lib/style.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialMediaIcons from "./SocialMediaIcons";

const container = {
  hidden: { opacity: 0, x: "-20%" }, // Starts off-screen to the left
  visible: { opacity: 1, x: "0%", transition: { duration: 0.8 } }, // Moves to its normal position
};

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [items, setItems] = useState([]);
  const [businessModal, setbusinessModal] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [location, setlocation] = useState([]);
  const [email, setEmail] = useState("");
  const [emailerror, setemailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [selectError, setSelctError] = useState("");
  const [message, setMessage] = useState("");
  const services = [
    { value: "branding", label: "Branding (Logo,Packaging,Label,Letterhead)" },
    { value: "cloud-services", label: "Cloud Services (Aws,Azure)" },
    {
      value: "digital-marketing",
      label: "Digital Marketing (FB,GOOGLE,INTAGRAM,YOUTUBE,LINKEDIN)",
    },
    {
      value: "domain-registration",
      label: "Domain Registration (DNS / SSL management)",
    },
    { value: "hosting", label: "Hosting (SQL,MySql,FTP,Webmail)" },
    {
      value: "e-commerce",
      label: "E-commerce Websit(checkout/payment integration)",
    },
    { value: "email-exchange", label: "Email Exchange (google)" },
    { value: "seo", label: "SEO (Basic & Advanced)" },
    { value: "payment-gateway", label: "Payment GateWay Integration" },
    { value: "social-media-management", label: "Social Media Management" },
    { value: "software-counseling", label: "Software Counseling" },
    {
      value: "video-management",
      label: "Video Management (Editing & Straming)",
    },
    { value: "websites", label: "Websites (One page & Multi-page)" },
    {
      value: "mobile-app-development",
      label: "Mobile App Development (IOS / Android)",
    },
  ];

  useEffect(() => {
    setlocation([
      selectedCountry && selectedCountry.name,
      selectedState && selectedState.name,
      selectedCity && selectedCity.name,
    ]);
    console.log("Updated Location:", [
      selectedCountry,
      selectedState,
      selectedCity,
    ]);
  }, [selectedCountry, selectedState, selectedCity]);

  const handleBlur = () => {
    const namePattern = /^[A-Za-z\s]{3,}$/;
    if (name.trim() === "") {
      setError("Name is required");
    } else if (!namePattern.test(name.trim())) {
      setError(
        "Name must be at least 3 characters long and contain only letters and spaces"
      );
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  };
  const [selectErrors, setSelectErrors] = useState('');

  const handleService = (e) => {
    const selectedService = e.target.value;
    if (selectedService && !items.includes(selectedService)) {
      setItems((prevItems) => [...prevItems, selectedService]);
      setSelectErrors('');
    } else if (items.includes(selectedService)) {
      setSelectErrors('Service already selected');
    }
  };

  const handleChangeemail = (e) => {
    setEmail(e.target.value);
  };

  const handleBluremail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setemailError("Please enter a valid email address.");
    } else {
      setemailError("");
    }
  };

  const handlePhonumber = () => {
    const normalizedPhoneNumber = phoneNumber.replace(/\D/g, "");
    console.log(normalizedPhoneNumber)
    const phonePattern = /^(\d{2})?\d{10}$/;
    if (!phonePattern.test(normalizedPhoneNumber)) {
      setPhoneError("Please enter a valid phone number, e.g., +91 xxxxxxxx");
    } else {
      setPhoneError("");
    }
  };

  // const handleSelect = (e) => {
  //    if (item) {
  //     setItems((prevItems) => {
  //       if (prevItems.includes(item)) {
  //         console.log("error");
  //         return prevItems; // No change if item already exists
  //       } else {
  //         const updatedItems = [...prevItems, item];
  //         console.log(updatedItems);
  //         return updatedItems; // Update state with new item
  //       }
  //     });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPhoneNumber = `+${phoneNumber}`;
  
    if (
      fullPhoneNumber.length > 0 &&
      name.length > 0 &&
      items.length > 0 &&
      businessModal.length > 0
    ) {
      // Construct the main message with emojis
      const wholeMessage = `👤 *Name:* ${name}%0A📧 *Email:* ${email}%0A📞 *Phone:* ${fullPhoneNumber}%0A🌍 *Country:* ${country}%0A💼 *Business:* ${businessModal}%0A🛍️ *Products:* ${products.join(", ")}%0A🔧 *Services:* ${items.join(", ")}%0A📝 *Message:* ${message}`;
  
      // Add the extra message (redirection link) with emoji
      const extraMessage = "🌟 Let's connect: https://connect.tltechnologies.net/";
      const finalMessage = `${wholeMessage}%0A%0A${extraMessage}`;
  
      // Construct the WhatsApp URL
      const whatsappUrl = `https://wa.me/919061432814?text=${finalMessage}`;
  
      // Log the URL for debugging
      console.log(whatsappUrl);
  
      // Open the WhatsApp URL in a new tab
      window.open(whatsappUrl, "_blank");
    } else {
      alert("Please check all fields");
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSkip = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const steps = [
    {
      label: "Name",
      content: (
        <div className="flex w-full flex-col justify-center items-center text-black md:gap-4 gap-2 flex-wrap ">
          <div className="  md:w-28 md:h-28 w-20 h-20    rounded-full flex justify-center items-center relative">
            <iframe
              src="https://lottie.host/embed/4ab1cb72-f02a-4238-851f-ad4e27f1f969/phYL5Dn2rg.json"
              className="absolute top-0 left-0  w-full h-full"
            ></iframe>
            <FaRegUser className="  md:text-5xl  text-2xl text-blue-600 z-20" />
          </div>
          <h1>
            enter your name{" "}
            <TooltipButton
              icon
              content={
                <p>
                  • Please enter your full name.
                  <br />
                  • Use your first name and last name.
                  <br />
                  • Ensure there are no numbers.
                  <br />• Only use alphabetic characters. eg: "John Doe"
                </p>
              }
            />
          </h1>
          <input
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            className="md:w-[70%] w-[90%] bg-blue-300 bg-opacity-65 border p-2 h-12  outline-none px-4  rounded-full placeholder:text-stone-900 placeholder:text-opacity-50"
            placeholder="name"
          />

          <p className="text-red-500 text-[10px] h-[12px]">{error && error}</p>
        </div>
      ),
    },
    {
      label: "Email",
      content: (
        <div className="flex w-full flex-col justify-between items-center h-auto text-black md:gap-4 gap-2 flex-wrap">
          <div className="  md:w-28 md:h-28 w-20 h-20    rounded-full flex justify-center items-center relative">
            <iframe  
              src="https://lottie.host/embed/4ab1cb72-f02a-4238-851f-ad4e27f1f969/phYL5Dn2rg.json"
              className="absolute top-0 left-0  w-full h-full"
            ></iframe>
            <MdAlternateEmail className="  md:text-5xl  text-2xl text-blue-600 z-20 " />
          </div>
          <h1>
            enter your email{" "}
            <span className="text-red-500">
              (optioanal){" "}
              <TooltipButton
                content={
                  <p>
                    Enter your email address.
                    <br />
                    • Do not include spaces or special characters outside of the
                    standard email format.
                    <br />
                    • Only use alphanumeric characters, periods, hyphens, and
                    the @ symbol.
                    <br />• eg: example@example.com
                  </p>
                }
              />
            </span>
          </h1>

          <input
            type="email"
            id="email"
            className="md:w-[70%] w-[90%] bg-blue-300 bg-opacity-65 border p-2 h-12  outline-none px-4  rounded-full placeholder:text-stone-900 placeholder:text-opacity-50"
            placeholder="xxx@gmail.com"
            value={email}
            onChange={handleChangeemail}
            onBlur={handleBluremail}
            aria-invalid={!!emailerror}
            aria-describedby="email-error"
          />

          <p id="email-error" className="text-red-500 h-[12px] text-[10px]">
            {emailerror && emailerror}
          </p>
        </div>
      ),
    },
    {
      label: "Phone Number",
      content: (
        <div className="flex w-full flex-col justify-center items-center text-black  flex-wrap">
          <div className="flex md:w-[70%] w-[90%] items-center  justify-start md:gap-6 flex-col  ">
            <div className="  md:w-28 md:h-28 w-20 h-20    rounded-full flex justify-center items-center relative">
              <iframe
                src="https://lottie.host/embed/4ab1cb72-f02a-4238-851f-ad4e27f1f969/phYL5Dn2rg.json"
                className="absolute top-0 left-0  w-full h-full"
              ></iframe>
              <FaPhoneFlip className="  md:text-5xl  text-2xl text-blue-600 z-20" />
            </div>
            <h1>
              enter your phone number{" "}
              <TooltipButton
                content={
                  <p>
                    Enter your phone number with the country code.
                    <br />
                    • Do not include spaces or special characters within the
                    number.
                    <br />
                    • Only use numeric characters.
                    <br />• eg: +20 xxxxxxxx
                  </p>
                }
              />
            </h1>
            <PhoneInput
              country={"in"}
              enableSearch={true}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              onBlur={handlePhonumber}
              inputStyle={{
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                width: "100%",
                height: "48px", // Same as h-12
                outline: "none",
                padding: "60px 16px", // Same as p-2 px-4
                borderRadius: "9999px",
                color: "#2D2D2D",
                opacity: "0.5",
                marginLeft: "40px",
              }}
              containerStyle={{
                width: "100%", // Same width as email input
                maxWidth: "70%", // md:w-[70%]
                border: "none",
                borderRadius: "9999px",
                // boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                backgroundColor: "rgba(147, 197, 253, 0.65)",
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                display: "flex",
                alignItems: "center",
                height: "48px", // Ensure the container matches the input height
              }}
              searchStyle={{
                backgroundColor: "transparent",
                padding: "",
                marginRight: "30px",
              }}
            />
          </div>

          <p className="text-red-500 text-[10px]  h-[12px]">
            {" "}
            {phoneError && phoneError}
          </p>
        </div>
      ),
    },
    {
      label: "Location",
      content: (
        <div className="flex w-full flex-col justify-center items-center text-black  md:gap-4 gap-2 flex-wrap">
          <div className="  md:w-28 md:h-28 w-20 h-20    rounded-full flex justify-center items-center relative">
            <iframe
              src="https://lottie.host/embed/4ab1cb72-f02a-4238-851f-ad4e27f1f969/phYL5Dn2rg.json"
              className="absolute top-0 left-0  w-full h-full"
            ></iframe>
            <FaLocationDot className="  md:text-5xl  text-2xl text-blue-600 z-20" />
          </div>
          <h1>
            choose your location.{" "}
            <TooltipButton
              content={
                <p>
                  Select your country, state, and city.
                  <br />
                  • Use the dropdown menus to select each location.
                  <br />• Ensure that all fields are filled out correctly.
                </p>
              }
            />
          </h1>

          <CountryStates
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />

          <p className="text-red-500 text-[10px] h-[12px]">
            {" "}
            {selectError && selectError}
          </p>
        </div>
      ),
    },
    {
      label: "Business Modal",
      content: (
        <div className="flex w-fit flex-col justify-center items-center text-black md:gap-4 gap-2 flex-wrap">
          <div className="  md:w-28 md:h-28 w-20 h-20    rounded-full flex justify-center items-center relative">
            <iframe
              src="https://lottie.host/embed/4ab1cb72-f02a-4238-851f-ad4e27f1f969/phYL5Dn2rg.json"
              className="absolute top-0 left-0  w-full h-full"
            ></iframe>
            <IoBriefcase className="  md:text-5xl  text-2xl text-blue-600 z-20" />
          </div>
          <h1>choose your business</h1>
          <select
            onChange={(e) => setbusinessModal(e.target.value)}
            id="business-industries"
            name="business-industries"
            placeholder="Business Model:"
            style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
            className="md:w-[70%] w-[90%] bg-blue-300 bg-opacity-65 border p-2 h-12  outline-none px-4  rounded-full placeholder:text-stone-900 placeholder:text-opacity-50"
          >
            <option value="">Business Model:</option>
            <option value="agriculture">Agriculture</option>
            <option value="automotive">Automotive</option>
            <option value="banking-finance">Banking & Finance</option>
            <option value="construction">Construction</option>
            <option value="education">Education</option>
            <option value="energy">Energy</option>
            <option value="entertainment">Entertainment</option>
            <option value="food-beverage">Food & Beverage</option>
            <option value="healthcare">Healthcare</option>
            <option value="hospitality">Hospitality</option>
            <option value="information-technology">
              Information Technology
            </option>
            <option value="insurance">Insurance</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="media">Media</option>
            <option value="pharmaceuticals">Pharmaceuticals</option>
            <option value="real-estate">Real Estate</option>
            <option value="retail">Retail</option>
            <option value="telecommunications">Telecommunications</option>
            <option value="transportation">Transportation</option>
            <option value="travel-tourism">Travel & Tourism</option>
          </select>
          <p className="text-red-500 text-[10px] h-[12px]">
            {" "}
            {businessModal.length > 0 && "select your business you have"}
          </p>
        </div>
      ),
    },
    {
      label: "Services",
      content: (
        <div className="flex w-full flex-col justify-center items-center text-black md:gap-4 gap-2 flex-wrap">
          <div className="  md:w-28 md:h-28 w-20 h-20    rounded-full flex justify-center items-center relative">
            <iframe
              src="https://lottie.host/embed/4ab1cb72-f02a-4238-851f-ad4e27f1f969/phYL5Dn2rg.json"
              className="absolute top-0 left-0  w-full h-full"
            ></iframe>
            <RiServiceFill className="md:  md:text-5xl  text-2xl  text-blue-600 z-20" />
          </div>
          <h1>select services </h1>
          <select
            className="md:w-[70%] w-[90%] bg-blue-300 bg-opacity-65 border p-2 h-12  outline-none px-4  rounded-full placeholder:text-stone-900 placeholder:text-opacity-50"
            placeholder="Select our service"
            style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
            onChange={handleService}
            // onBlur={handleSelect}
          >
            <option value="" disabled selected>
              Select a service
            </option>
            <option
              value="Branding (Logo,Packaging,Label,Letterhead)"
              className="text-red-400"
            >
              Branding (Logo,Packaging,Label,Letterhead)
            </option>
            <option value="Cloud Services (Aws,Azure)" className="text-red-400">
              Cloud Services (Aws,Azure)
            </option>
            <option
              value="Digital Marketing (FB,GOOGLE,INTAGRAM,YOUTUBE,LINKEDIN)"
              className="text-red-400"
            >
              Digital Marketing (FB,GOOGLE,INTAGRAM,YOUTUBE,LINKEDIN)
            </option>
            <option
              value="Domain Registration (DNS / SSL management)"
              className="text-red-400"
            >
              Domain Registration (DNS / SSL management)
            </option>
            <option
              value="Hosting (SQL,MySql,FTP,Webmail)"
              className="text-red-400"
            >
              Hosting (SQL,MySql,FTP,Webmail)
            </option>
            <option
              value="E-commerce Website (checkout/payment integration)"
              className="text-red-400"
            >
              E-commerce Website (checkout/payment integration)
            </option>
            <option value="Email Exchange (google)" className="text-red-400">
              Email Exchange (google)
            </option>
            <option value="SEO (Basic & Advanced)" className="text-red-400">
              SEO (Basic & Advanced)
            </option>
            <option
              value="Payment Gateway Integration"
              className="text-red-400"
            >
              Payment Gateway Integration
            </option>
            <option value="Social Media Management" className="text-red-400">
              Social Media Management
            </option>
            <option value="Software Counseling" className="text-red-400">
              Software Counseling
            </option>
            <option
              value="Video Management (Editing & Streaming)"
              className="text-red-400"
            >
              Video Management (Editing & Streaming)
            </option>
            <option
              value="Websites (One page & Multi-page)"
              className="text-red-400"
            >
              Websites (One page & Multi-page)
            </option>
            <option
              value="Mobile App Development (IOS / Android)"
              className="text-red-400"
            >
              Mobile App Development (IOS / Android)
            </option>
          </select>

          <p className="text-red-500 text-[10px] h-[12px]">
            {selectError && selectError}
          </p>
        </div>
      ),
    },
    {
      label: "Message",
      content: (
        <div className="flex w-full flex-col justify-center items-center text-black md:gap-4 gap-2 flex-wrap">
          <div className="  md:w-28 md:h-28 w-20 h-20    rounded-full flex justify-center items-center relative">
            <iframe
              src="https://lottie.host/embed/4ab1cb72-f02a-4238-851f-ad4e27f1f969/phYL5Dn2rg.json"
              className="absolute top-0 left-0  w-full h-full"
            ></iframe>
            <TbMessageCircle2Filled className="  md:text-5xl  text-2xl text-blue-600 z-20" />
          </div>
          <h1>learn more </h1>
          <textarea
            className="md:w-[70%] w-[90%] bg-blue-300 bg-opacity-65 border p-2 h-12  outline-none px-4  rounded-lg placeholder:text-stone-900 placeholder:text-opacity-50"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p className="text-red-500 text-[10px] h-[12px]">
            {" "}
            {100 - message.length} left
          </p>
        </div>
      ),
    },
    {
      label: "Preview",
      content: (
        <div className="flex  flex-col justify-center items-start p-4 md:w-[80%] w-[100%] bg-stone-50 rounded-xl text-black md:gap-4 gap-2 flex-wrap">
          <h1>Preview Your Details</h1>
          <div className=" w-full text-stone-600 md:text-sm text-xs rounded">
            <p>
              <strong className="text-cyan-600 ">Name:</strong> {name}
            </p>
            <p>
              <strong className="text-cyan-600 ">Email:</strong> {email}
            </p>
            <p>
              <strong className="text-cyan-600 ">Phone Number:</strong>{" "}
              {`+${phoneNumber}`}
            </p>
            <p>
              <strong className="text-cyan-600 ">Business Model:</strong>{" "}
              {businessModal}
            </p>
            <p>
              <strong className="text-cyan-600 ">Services:</strong>{" "}
              {items.join(", ")}
            </p>
            <p>
              <strong className="text-cyan-600 ">Location:</strong>{" "}
              {location.join(", ")}
            </p>
            <p>
              <strong className="text-cyan-600 ">Message:</strong> {message}
            </p>
          </div>
        </div>
      ),
    },
  ];
  const progress = ((currentStep + 1) / steps.length) * 100;
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentStep]);
  const handlePreview = () => {
    setCurrentStep(steps.length - 1); // Move to the preview step
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full bg-stone-950 bg-opacity-10 flex flex-col items-center justify-between p-4 gap-4 overflow-x-hidden relative   backdrop-blur-xl  rounded-lg"
    >
      <div className="w-full flex-col md:w-[80%]  font-extrabold  text-[blackinp] flex items-center justify-center gap-2">
        <h2 className="w-full text-4xl text-start text-black" 
        // style={{textShadow: "0 0 10px rgba(0, 0, 0, 0)"}}
        >Get In Touch</h2>
        <div className="progress-container mb-4  bottom-0 w-full">
      <div
        className="progress-bar bg-blue-500 h-2 rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
      </div>
      <AnimatePresence>
        <motion.div
          className="w-full  flex items-center  flex-col gap-3"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {steps[currentStep].content}
      
        </motion.div>
      </AnimatePresence>

      <div className="w-full md:w-[80%]">
      <div className="md:w-[100%]  w-full mb-5 flex items-center justify-between gap-4">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="text-stone-900 text-2xl px-3 py-1  z-10 rounded-full border bg-white hover:scale-105 hover:bg-stone-300 transition-all duration-500"
              >
                <FaArrowLeftLong />
              </button>
            )}
            {currentStep === steps.length - 7 && (
              <button
                type="button"
                onClick={handleSkip}
                className="text-blue-500 underline  rounded-full   "
              >
                skip
              </button>
            )}
            {currentStep < steps.length - 1 ? (

              <button
                type="button"
                onClick={handleNext}
                className="text-black  px-3 py-1 text-2xl bg-white rounded-full   transition-all duration-500 hover:scale-105 "
                >
                <FaArrowRightLong />
              </button>
            ) : (
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="bg-green-600 px-3  transition-all duration-500 py-1 text-white font-bold hover:scale-105 rounded-full"
                >
                  lets connect
                </button>
              </div>
            )}
          </div>
        <p className="text-stone-500 w-full">Your Marketing & IT partner</p>

        <div className="flex justify-between items-center w-full flex-wrap text-black  ">
          <span>follow us</span>
          <SocialMediaIcons
            icon={
              <FaWhatsapp className=" md:text-2xl text-lg text-black hover:text-green-500" />
            }
            link={"api.whatsapp.com/send/?phone=919061432814"}
          />
          <SocialMediaIcons
            icon={
              <FaFacebookF className=" md:text-2xl text-lg text-black hover:text-blue-500" />
            }
            link={"https://www.facebook.com/tltechnologiespvtltd"}
          />
          <SocialMediaIcons
            icon={
              <FaInstagram className=" md:text-2xl text-lg text-black hover:text-pink-500" />
            }
            link={"https://www.instagram.com/tltechnologiespvtltd/"}
          />
          <SocialMediaIcons
            icon={
              <FaYoutube className=" md:text-2xl text-lg text-black hover:text-red-500" />
            }
            link={"https://www.youtube.com/channel/UC66DHUJ0uCcSbAqhppInx5Q"}
          />
          <SocialMediaIcons
            icon={
              <FaPinterest className=" md:text-2xl text-lg text-black hover:text-red-600" />
            }
            link={"https://in.pinterest.com/tltechnologiespvtltd/"}
          />
          <SocialMediaIcons
            icon={
              <FaLinkedin className=" md:text-2xl text-lg text-black hover:text-blue-600" />
            }
            link={"https://in.linkedin.com/tltechnologiespvtltd/"}
          />
          <SocialMediaIcons
            icon={
              <SiGooglemybusiness
              className=" md:text-2xl text-lg text-black hover:text-blue-600" />
            }
            link={"https://g.co/kgs/kehDd8b"}
          />
        </div>
      </div>

      {/* 
  
    <h1 className="absolute top-0 w-full text-center text-3xl  font-bold text-black p-4">
      Match your needs
    </h1> */}
    </form>
  );
}

export default Form;
