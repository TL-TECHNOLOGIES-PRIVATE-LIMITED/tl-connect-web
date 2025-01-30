import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import SocialMediaIcons from './SocialMediaIcons';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { SiGooglemybusiness } from 'react-icons/si';
import logo from '../img/Logo-TL.png'
import CountrySelector from './countrySelector';
import TooltipButton from './ToolTipButton';
import { FaAsterisk } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FaLocationDot } from "react-icons/fa6";
import {  products, service } from '../constants/datas';
import toast from 'react-hot-toast';
import { FaGlobeAmericas } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import SuccessModal from './CustomModal';
import ChatbotModal from './ChatBot';


const ContactForm = () => {
  const [phone, setPhone] = useState('');
  const [items,setItems]=useState([])
  const [selectedProducts,setSelectedProduct]=useState([])
  const [wurl,setWurl]=useState("")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    businessModel: '',
    selectedProducts:"",
    location: ''
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    message: '',
    businessModel: '',
    services: '',
    location: '',
    items:"",
    selectedProducts:""
  });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success'); // 'success' or 'error'
  const [message, setMessage] = useState('');
  const closeModal = () => {
    setShowModal(false);
  };
  const handleService = (e) => {
    const selectedService = e.target.value;
    if (items.includes(selectedService)) {
      return;
    }
    setItems((prevItems) => [...prevItems, selectedService]);
  };
  
  const handleProducts = (e) => {
    const selectedProduct = e.target.value;
    if (selectedProducts.includes(selectedProduct)) {
      return;
    }
    setSelectedProduct((prevProducts) => [...prevProducts, selectedProduct]);
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setPhone(e.target.value); // Update the phone number separately if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let hasError = false;
    let newError = { ...error };
  
    // Validate the name field
    const namePattern = /^[A-Za-z\s]{3,}$/;
    if (!namePattern.test(formData.name)) {
      newError.name = "Name cannot be empty.";
      hasError = true;
    } else {
      newError.name = "";
    }
  
    // Validate the email field
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newError.email = "Email must be in the format example@domain.com.";
      hasError = true;
    } else {
      newError.email = "";
    }
  
    // Validate the phone field
    const normalizedPhoneNumber = phone.replace(/\D/g, ""); // Remove non-numeric characters
const minPhoneLength = 10;

if (normalizedPhoneNumber.length < minPhoneLength) {
  newError.phone = "Phone number should have at least 10 digits.";
  hasError = true;
} else {
  // You can keep the pattern checks if you want to validate formats, but you might not need it for the min length check
  const usPhonePattern = /^1\d{10}$/;  // Matches +1 followed by 10 digits
  const internationalPhonePattern = /^\d{4,12}$/; // Matches international numbers with or without country code
  
  if (usPhonePattern.test(normalizedPhoneNumber) || internationalPhonePattern.test(normalizedPhoneNumber)) {
    newError.phone = ""; // Valid phone number
  } else {
    newError.phone = "Phone number should contain only numbers and valid format.";
    hasError = true;
  }
}
  
    // Validate the message field
    if (formData.message.length <= 0) {
      newError.message = "Message cannot be blank.";
      hasError = true;
    } else {
      newError.message = "";
    }
  
    // Validate the business model field
    if (formData.businessModel.length <= 0) {
      newError.businessModel = "Please select a business model";
      hasError = true;
    } else {
      newError.businessModel = "";
    }
  
    // Validate the selected products field
    if (selectedProducts.length <= 0) {
      newError.selectedProducts = "Please choose a product.";
      hasError = true;
    } else {
      newError.selectedProducts = "";
    }
  
    // Validate the selected services field
    if (items.length <= 0) {
      newError.items = "Please choose a service.";
      hasError = true;
    } else {
      newError.items = "";
    }
  
    // Validate the location field
    if (formData.location.length <= 0) {
      newError.location = "Country selection is required.";
      hasError = true;
    } else {
      newError.location = "";
    }
  
    setError(newError);
  
    // If there are any errors, stop form submission
    if (hasError) {
      setMessage('There was an issue with your submission');
      setModalType('error');
      setShowModal(true);
      return;
    }
  
    // Proceed with form submission
    const url = `https://api.whatsapp.com/send?phone=919061432814&text=${encodeURIComponent(
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📞 *Phone:* +${parseInt(phone)}\n` +
      `🌍 *Country:* ${formData.location}\n` +
      `💼 *Business:* ${formData.businessModel}\n` +
      `🛍️ *Products:*\n${selectedProducts.map(product => `• ${product}`).join("\n")}\n` +
      `🔧 *Services:*\n${items.map(service => `• ${service}`).join("\n")}\n\n` +
      `📝 *Message:* ${formData.message}\n\n` +
      `🌟 Let's connect: https://connect.tltechnologies.net/`
    )}`;
    
    // Open the WhatsApp URL in a new tab
    window.open(url, "_blank");
  
    setWurl(url); // Set the WhatsApp URL
  
    setShowModal(true); // Show the success modal
    setMessage('We’ve received your submission and will contact you shortly.');
    setModalType('success');
  
    // Redirect to WhatsApp after a small delay to allow the modal message to show
    setTimeout(() => {
      //redirect to new tab
        window.open(url, '_blank');
    }, 2000); // Adjust the delay (2000ms = 2 seconds)
  };

  const removeProduct = (product) => {
    setSelectedProduct(selectedProducts.filter((item) => item !== product));
  };

  const removeService = (service) => {
    setItems(items.filter((item) => item !== service));
  };

  const navigate = useNavigate("/services")

  return (
    <div className="custom-scrollbar  p-4 w-full h-full backdrop-blur-xl text-xs overflow-y-auto text-black bg-white">
      {/* <ChatbotModal/> */}
    <SuccessModal 
        showModal={showModal} 
        closeModal={() => setShowModal(false)} 
        modalType={modalType} 
        message={message} 
        url={wurl}
      />
    <form onSubmit={handleSubmit}  className="md:space-y-2 space-y-3 max-w-lg mx-auto flex flex-col justify-between h-full w-full ">
    <h1 className='text-3xl font-bold space-y-2 '>Get in touch </h1>
    <p className='md:text-sm text-[10px] text-black flex items-center'>Please fill out all required fields  (<FaAsterisk  className='text-red-500 text-[7px] '/>) to ensure a smooth process.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="  gap-1  text-xs flex items-center font-bold text-gray-700  ps-4">
            
            
          <FaAsterisk  className='text-red-500 text-sm pe-2' />Name <TooltipButton
              icon
              content={
                <p>
                   Enter your full name as it appears on official documents.
                </p>
              }
            /></label>
          <input
            type="text"
            name="name"
            placeholder='Enter your full name'
            value={formData.name}
            onChange={handleChange}
           
            className={`mt-1 block w-full border-stone-400 border  outline-none text-stone-950 p-2 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 ${error.name.length>0&&"bg-red-100"} `}
          />
          <p className='text-[red] ps-4 text-[10px] '>{error.name}</p>
          
        </div>
        <div>
          <label className="  gap-1 flex items-center text-xs font-bold text-gray-700  ps-4"> <FaAsterisk  className='text-transparent text-sm pe-2'/> Email <TooltipButton
                content={
                  <p>
                    We'll use this email to contact you.
                  </p>
                }
              /></label>
          <input
            // type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            
            className={`mt-1 block w-full border-stone-400 border  outline-none text-stone-950 p-2 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 ${error.email.length>0&&"bg-red-100"} `}
          />
                    <p className='text-[red] ps-4 text-[10px] '>{error.email}</p>

        </div>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       <div>
            <label className="  gap-1 flex items-center text-xs font-bold text-gray-700  ps-4"> <FaAsterisk  className='text-red-500 text-sm pe-2'/> Phone Number   <TooltipButton
                content={
                  <p>
                   Provide your contact number including country code.
                  </p>
                }
              /></label>
         
            <PhoneInput
  country={'in'}
  value={phone}
  onChange={setPhone}
  containerStyle={{ width: '100%', marginTop: '4px', borderRadius: '30px',backgroundColor:error.email.length>0&&"#FEE2E2" }}
  inputStyle={{ width: '100%', borderRadius: '30px',   fontFamily: '"Outfit", sans-serif',fontSize:"12px",backgroundColor:error.email.length>0&&"#FEE2E2" }}
  inputProps={{
    name: 'phone',
    // required: true,
    // autoFocus: true,
    placeholder:"Enter your phone number"
  }}
/>
<p className='text-[red] ps-4 text-[10px] '>{error.phone}</p>


          </div>
        <div>
          <label className="  gap-1 flex items-center text-xs font-bold text-gray-700  ps-4"> <FaAsterisk  className='text-red-500 text-sm pe-2'/> Country <TooltipButton
  content={
    <p>
       Select the country you are located in.
    </p>
  }
  onClick={(e) => e.stopPropagation()}
/>
</label>
         
          <CountrySelector  name={"location"} onChange={handleChange} error={error.location} value={formData.location} />
          <p className='text-[red] ps-4 text-[10px] '>{error.location}</p>

        </div>
      </div>
  
      
  
      <div>
        <label className="  gap-1 flex items-center text-xs font-bold text-gray-700  ps-4"> <FaAsterisk  className='text-red-500 text-sm pe-2'/> Line of business<TooltipButton
  content={
    <p>
       Choose the industry or field your business operates in.
    </p>
  }
  onClick={(e) => e.stopPropagation()}
/>
</label>
        <select
          name="businessModel"
          value={formData.businessModel}
          onChange={handleChange}
          
          className={`mt-1 block w-full border-stone-400 border  outline-none text-stone-950 p-2 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 ${error.businessModel.length>0&&"bg-red-100"}`}
        >
          <option value="" className='text-blue font-bold'>Select your business</option>
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
        <p className='text-[red] ps-4 text-[10px] '>{error.businessModel}</p>

      </div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
      {/* Products Section */}
      <div>
      <label className="gap-1 text-xs flex items-center justify-between font-bold text-gray-700 ps-4">
  <div className="flex items-center gap-1">
    <FaAsterisk className="text-red-500 text-sm pe-2" />
    Products 
    <TooltipButton
      icon
      content={
        <p>
          Select the Products you're interested in
        </p>
      }
    />
  </div>
  <div className='flex  justify-between items-center gap-2'>

  <span className="text-red-500 bg-stone-200 px-3 p-1 rounded-full font-bold text-[14px]">
        {selectedProducts.length}&nbsp;/&nbsp;{products.length}{" "}
      </span> 
  {selectedProducts.length > 0 && (
    <button
      onClick={() => setSelectedProduct([])}
      type="button"
      className="bg-black px-3 p-1 rounded-full text-white hover:bg-slate-700 duration- transition-all"
    >
      
      Clear all
    </button>
  )}
  </div>
</label>


        <select
          name="products"
          value={formData.products}
          onChange={handleProducts}
          className={`mt-1 block w-full border-stone-400 border  outline-none text-stone-950 p-2 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 ${error.selectedProducts.length>0&&"bg-red-100"} `}
          >
          <option value="" disabled>
            Select a product
          </option>
          {products
            .sort((a, b) => a.localeCompare(b))
            .map((product, index) => (
              <option
                key={index}
                value={product}
                disabled={selectedProducts.includes(product)}
                              className={selectedProducts.includes(product) ? 'bg-gray-400' : ''}

              >
                {product}
              </option>
            ))}
        </select>

        <div className="w-full flex-wrap flex gap-2 ps-2 py-1">
          {selectedProducts.map((item, index) => (
            <motion.div
              key={index}
              className="text-xs font-sans font-bold flex items-start justify-between gap-2 w-full text-blue-700 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-1 "><RiServiceFill  className="text-black pt-1 text-sm" /> 


                           <p className="w-fit">{item}</p></div>

              <button
              type="button"
                onClick={() => removeProduct(item)}
                className="ml-2 text-xs text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </div>
       
      </div>

      {/* Services Section */}
      <div>
      <label className="relative flex items-center justify-between">
  <div className="flex items-center gap-1 text-xs font-bold text-gray-700 ps-4">
    <FaAsterisk className="text-red-500 text-sm pe-2" />
    Services
   
    <TooltipButton
      icon
      content={<p>Select the Services you're interested in</p>}
    />
  </div>
  <div className='flex  justify-between items-center gap-2'>
  <span className="text-red-500 bg-stone-200 px-3 p-1 rounded-full font-bold text-[14px]">
      {items.length}&nbsp;/&nbsp;{service.length}{" "}
    </span> 
  {items.length > 0 && (
    <button
      onClick={() => setItems([])}
      type="button"
      className="bg-black px-3 p-1 rounded-full text-white hover:bg-slate-700 duration- transition-all du"
    >
      Clear all
    </button>
  )}
</div>
</label>

        <select
          name="services"
          value={formData.services}
          onChange={handleService}
          className={`mt-1 block w-full border-stone-400 border  outline-none text-stone-950 p-2 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 ${error.selectedProducts.length>0&&"bg-red-100"} `}
        >
          <option value="" disabled>
            Select a service
          </option>
          {service
            .sort((a, b) => a.localeCompare(b))
            .map((service, index) => (
              <option
                key={index}
                value={service}
              className={items.includes(service) ? 'bg-gray-400' : ''}
                disabled={items.includes(service)}
              >
                {service}
              </option>
            ))}
        </select>
 <div className="w-full flex-wrap flex gap-2  ps-2 py-1">

          {items.map((item, index) => (
            <motion.div
              key={index}
              className="text-xs font-sans font-bold w-full flex items-start justify-between gap-2 text-blue-700 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
             
              <div className="flex gap-1 ">
              
              <div> <RiServiceFill  className="text-black pt-1 text-sm" /> </div>


                           <p className="w-fit">{item}</p></div>
              <button
              type="button"
                onClick={() => removeService(item)}
                className="ml-2 text-xs text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </div>
      
       
      </div>
      {(error.selectedProducts.length > 0 && error.items.length > 0) && (
  <p className="text-[red] w-full  ps-4 text-[10px]">
    {error.selectedProducts}
  </p>
)}

    </div>

      <div>
        <label className="  gap-1 flex items-center text-xs font-bold text-gray-700  ps-4"> <FaAsterisk  className='text-red-500 text-sm pe-2'/> Message <TooltipButton
          content={
            <p>
            Let us know how we can assist you.
            </p>
          }
          onclick={(e) => e.stopPropagation()}
        />
 <span className="text-blue-500 px-4 font-normal">
        {formData.message.length}/{100} letters left
      </span>   

        </label>
        <textarea
          name="message"
          value={formData.message}
          placeholder='Feel free to ask us ...'
          onChange={handleChange}
          
          className={`mt-1 block w-full border-stone-400 border  outline-none text-stone-950 p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${error.message.length>0&&"bg-red-100"} `}
          />
                  <p className='text-[red] ps-4 text-[10px] '>{error.message}</p>

      </div>
      <div className='w-full flex   justify-between'>
      <button className="text-stone-950 font-bold w-fit flex items-center p-1 gap-2  hover:scale-105 transition-all duration-300 ease-in-out border-stone-950 bg-opacity-20  bg-black rounded-full" type='button' onClick={()=>navigate("/products&services")} >
<img src="https://tltechnologies.net/assets/images/logo.svg" className="h-8 w-auto" alt="" />
<h1>Products & Services</h1>
      </button>

        <button
          type="submit"
          style={{backgroundImage:"radial-gradient(circle, #e81225, #ec1021, #f10d1d, #f50b19, #f90a13, #f91115, #f91617, #f91a19, #f42221, #ee2928, #e92f2e, #e33434)"}}
          className="text-xl py-1 px-4 w-[170px] hover:px-2 transition-all duration-300 ease-in-out text-white font-semibold rounded-full outline-yellow-400 outline-1 border-2 border-black shadow-sm hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        >
          lets connect !
        </button>
      </div>
     
    <div className="flex justify-evenly items-center w-full flex-wrap text-black  ">
          <span>follow us</span>
          <SocialMediaIcons
            icon={
              <FaWhatsapp className=" md:text-2xl text-lg transition-all duration-300 ease-in-out hover:text-black text-green-500" />
            }
            link={"https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+PRODUCTS+%26+SERVICES&type=phone_number&app_absent=0"}
          />
          <SocialMediaIcons
            icon={
              <FaGlobeAmericas
              className=" md:text-2xl text-lg hover:text-black transition-all duration-300 ease-in-out text-stone-600" />
            }
            link={"https://tltechnologies.net/"}
          />
          <SocialMediaIcons
            icon={
              <SiGooglemybusiness
              className=" md:text-2xl text-lg transition-all duration-300 ease-in-out hover:text-black text-blue-600" />
            }
            link={"https://www.google.com/search?q=tltechnologies&rlz=1C1ONGR_enIN1100IN1100&oq=tltechnologies&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQLhgKGK8BGMcBGIAEMgkIAhAAGAoYgAQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQkzMDgzMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"}
          />
             <SocialMediaIcons
            icon={
              <FaLocationDot
              className=" md:text-2xl text-lg hover:text-black transition-all duration-300 ease-in-out text-blue-600" />
            }
            link={"https://maps.app.goo.gl/udfxj53LVog3yR9p9"}
          />
          <SocialMediaIcons
            icon={
              <FaFacebookF className=" md:text-2xl text-lg transition-all duration-300 ease-in-out hover:text-black text-blue-500" />
            }
            link={"https://www.facebook.com/tltechnologiespvtltd"}
          />
          <SocialMediaIcons
            icon={
              <FaInstagram className=" md:text-2xl text-lg transition-all duration-300 ease-in-out hover:text-black text-pink-500" />
            }
            link={"https://www.instagram.com/tltechnologiespvtltd/"}
          />
          <SocialMediaIcons
            icon={
              <FaYoutube className=" md:text-2xl text-lg transition-all duration-300 ease-in-out hover:text-black text-red-500" />
            }
            link={"https://www.youtube.com/@tltechnologiespvtltd-sangi"}
          />
           <SocialMediaIcons
            icon={
              <FaPinterest className=" md:text-2xl text-lg transition-all duration-300 ease-in-out hover:text-black text-red-600" />
            }
            link={"https://in.pinterest.com/tltechnologiespvtltd/"}
          />
          <SocialMediaIcons
            icon={
              <FaLinkedin className=" md:text-2xl text-lg transition-all duration-300 ease-in-out hover:text-black text-blue-600" />
            }
            link={"https://www.linkedin.com/company/tltechnologiespvtltd/"}
          />
          
       
       
        </div>
    </form>
  </div>
  
  );
};

export default ContactForm;
