import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import TLServices from "./Pages/ServicePage";
import LoadingSpinner from "./Components/LoadingSpinner";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  const [loading, setLoading] = useState(true); // Set initial state to true
  const location = useLocation();
  // <======================================== NOTES START ==============================================>

  // Libraries used :   "tailwind-css" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code: npm start
  // First install all dependencies :- npm intsall
  // Then run the code :- npm start

  // created date : 06-MAY-2024 || created by : Murthasa Ali  || module : 1 ||
  // modified date : 05/09/2024 || modified by : Murthasa ALi || module : 1 ||
  // modified date : 24/09/2024 || modified by : Murthasa Ali ck  || module : 1 ||

  // Technical summary(Pre-setups) created date/by :  Murthasa Ali ||
  // Domain :   || 
  // Hosting :   ||
  // SSL :   ||
  // Database :  ||

  // Phase summary :   || created date/by :  Ali  ||
  // Phase 1 :  SetUps ||
  // Phase 2 :  Development/Main page creation ||
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3500); // Adjust the timeout to match your animation duration
    };

    handleRouteChange();
  }, [location.pathname]);

  useEffect(() => {
    // Hide the loading spinner after the initial load
    const initialLoadTimeout = setTimeout(() => {
      setLoading(false);
    }, 3500); // Adjust the timeout to match your initial loading spinner duration

    return () => clearTimeout(initialLoadTimeout); // Cleanup the timeout if the component unmounts
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products&services" element={<TLServices />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}

        </Routes>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
