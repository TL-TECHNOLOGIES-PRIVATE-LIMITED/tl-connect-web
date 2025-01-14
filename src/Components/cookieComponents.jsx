import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import cookie from '../img/coockie.png'
import { IoClose } from 'react-icons/io5';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const togglePolicyModal = (e) => {
    e.preventDefault();
    setIsPolicyModalOpen(!isPolicyModalOpen);
  };

  const PolicyModal = () => (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40 p-4 md:p-6">
      <div className="bg-stone-50 rounded-lg shadow-xl w-full max-w-2xl relative flex flex-col max-h-[95dvh]">
        {/* Header Section - Fixed */}
        <div className="p-6 border-b">
          {/* <button 
            onClick={() => setIsPolicyModalOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <IoClose className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button> */}
          <h2 className=" text-2xl font-bold pr-8">Cookie Policy for TL || connect </h2>
        </div>

        {/* Content Section - Scrollable */}
        <div className="p-6 overflow-y-auto flex-grow">
          <div className="prose max-w-none">
            <p className="mb-4">
            We use cookies to enhance your experience, analyze site traffic, and personalize content. By using our website, you agree to the use of cookies as outlined in this policy.            </p>

            <h3 className="text-xl font-semibold mb-2">What Are Cookies?</h3>
            <p className="mb-4">
              Cookies are small text files placed on your device when you visit our website. They help us understand how you interact with our website, improve your browsing experience, and provide relevant content.
            </p>

            <h3 className="text-xl font-semibold mb-2">Types of Cookies We Use</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li>
                <strong>Essential Cookies</strong>
                <p>Necessary for website functionality, such as login sessions and security features.</p>
              </li>
              <li>
                <strong>Performance Cookies</strong>
                <p>Track website performance and user behavior to improve our services.</p>
              </li>
              <li>
                <strong>Functional Cookies</strong>
                <p>Remember user preferences (e.g., language, location).</p>
              </li>
              <li>
                <strong>Advertising and Analytics Cookies</strong>
                <p>Help deliver relevant ads based on your browsing habits.</p>
              </li>
            </ol>

            {/* <h3 className="text-xl font-semibold mb-2">How We Use Cookies</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide seamless booking and enquiry processes for our services (e.g., tour packages, transportation options, and guided tours).</li>
              <li>To analyze traffic on our website and improve navigation for customers exploring our offerings such as luxury bus rentals, adventure activities, and eco-tourism.</li>
              <li>To remember user preferences and enhance your browsing experience.</li>
            </ul> */}

            <h3 className="text-xl font-semibold mb-2">How to Manage Cookies</h3>
            <p className="mb-4">
            You can manage or disable cookies through your browser settings. However, disabling cookies may limit certain functionalities of the website.
            </p>

            <h3 className="text-xl font-semibold mb-2">Third-Party Cookies</h3>
            <p className="mb-4">
              We may use third-party services (e.g., Google Analytics) to analyze website usage and enhance our marketing efforts. These providers may also place cookies on your device.
            </p>

            <h3 className="text-xl font-semibold mb-2">Changes to This Policy</h3>
            <p className="mb-4">
            We may update our Cookie Policy from time to time. Please review this page periodically for any changes.
            </p>

            {/* <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-4">
              If you have any questions about our Cookie Policy or how we use cookies, feel free to reach out:
              <br />
              Phone: +91 8086407979
              <br />
              Email: info@keraladrives.com
              <br />
              Website: keraladrives.com
            </p>

            <p className="italic">
              By continuing to use our website, you consent to our use of cookies as outlined in this policy.
              <br />
              "Discover, Relax, and Adventure with Us!" 🌟
            </p> */}
          </div>
        </div>

        {/* Footer Section - Fixed */}
        <div className="p-6 border-t bg-stone-50">
          <div className="flex justify-end">
            <button
              onClick={() => setIsPolicyModalOpen(false)}
              className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const portalElement = document.getElementById('cookie-consent-portal');

  return (
    <>
      {visible && portalElement && ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40 p-4">
          <div className="bg-white border overflow-hidden relative border-gray-300 shadow-lg p-6 max-w-xs w-full">
            <div className="absolute bottom-[-30px] left-[-30px]">
              <img src={cookie} alt="Cookie icon" className="h-28 w-auto z-10" />
            </div>
            
            <div className="flex justify-between items-start z-20 mb-4">
              <div className="text-left">
                <h3 className="text-2xl font-extrabold text-black">
                  We use <span className="bg-yellow-200">cookies</span>
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We use <strong>cookies</strong> to make your experience on this website better.
                </p>
              </div>
              <button onClick={handleClose} className="p-1 rounded-full hover:bg-gray-100">
                <IoClose className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <div className="flex justify-between z-20 items-end space-x-4">
              <button
                onClick={togglePolicyModal}
                className="border border-gray-400 text-xs z-20 text-gray-700 py-1 px-4 rounded-lg bg-gray-100 bg-opacity-70"
              >
                Cookie Policies
              </button>
              <button
                onClick={handleAccept}
                className="bg-black text-white z-10 py-1 px-4 rounded-lg hover:bg-gray-800"
              >
                Accept
              </button>
            </div>
          </div>
        </div>,
        portalElement
      )}
      
      {isPolicyModalOpen && portalElement && ReactDOM.createPortal(
        <PolicyModal />,
        portalElement
      )}
    </>
  );
};

export default CookieConsent;