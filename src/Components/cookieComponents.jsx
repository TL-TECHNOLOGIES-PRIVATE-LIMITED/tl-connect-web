import React, { useState, useEffect } from 'react';

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

  return (
    visible && (
      <div className="fixed bottom-4 z-50  w-fit left-4  min-w-[300px] bg-stone-100 text-black py-4 px-6 flex justify-between items-center">
        <div className="text-sm">
          We use cookies to improve your experience on our site. By using our site, you consent to cookies. Read our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </div>
        <button 
          onClick={handleAccept} 
          className="bg-blue-600 text-white py-2 px-4 rounded-lg">
          Accept
        </button>
      </div>
    )
  );
}

export default CookieConsent;
