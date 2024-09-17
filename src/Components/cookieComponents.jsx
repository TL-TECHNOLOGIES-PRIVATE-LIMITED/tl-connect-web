import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import cookie from '../img/coockie.png'
function CookieConsent() {
  const [visible, setVisible] = useState(false);

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

  const portalElement = document.getElementById('cookie-consent-portal');

  return (
    visible && 
    portalElement &&
    ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40">
        <div className="bg-white border overflow-hidden relative border-gray-300 shadow-lg p-6  max-w-xs w-full">
          <div className="absolute bottom-[-30px] left-[-30px] ">
        <img src={cookie} alt="" className='h-28 w-auto first-line:z-10' />
        </div>

          <div className="flex justify-between items-start z-20 mb-4">
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-black">
                We uses <span className="bg-yellow-200">cookies</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                We use <strong>cookies</strong> to make your experience on this website better.
              </p>
            </div>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
              &#10005;
            </button>
          </div>
          <div className="flex justify-between z-20 items-end space-x-4">
            
            <a
              href="/cookie-policy"
              className="border border-gray-400 text-xs  z-20 text-gray-700 py-1 px-4 rounded-lg bg-gray-100 bg-opacity-70"
            >
              Cookie Policies
            </a>
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
    )
  );
}

export default CookieConsent;
