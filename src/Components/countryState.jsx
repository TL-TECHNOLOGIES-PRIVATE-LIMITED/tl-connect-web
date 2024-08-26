import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { FaMapLocation } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export default function CountryStates({
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity
  }) {

  

  useEffect(() => {
    if (selectedCountry) {
      console.log(selectedCountry);
      console.log(selectedCountry?.isoCode);
      console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    const country = Country.getAllCountries().find(
      (c) => c.name === event.target.value
    );
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (event) => {
    const state = State.getStatesOfCountry(selectedCountry?.isoCode).find(
      (s) => s.name === event.target.value
    );
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleCityChange = (event) => {
    const city = City.getCitiesOfState(
      selectedState?.countryCode,
      selectedState?.isoCode
    ).find((c) => c.name === event.target.value);
    setSelectedCity(city);
  };

  return (
    <div className="flex w-[60%]  justify-center text-xs   items-center md:gap-6 gap-2  rounded-md">
        {/* <h6 className="text-sm  "><CiLocationOn/></h6> */}
        <div className="flex w-full flex-col gap-2 flex-wrap">

      <select  style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
        onChange={handleCountryChange}
        className="md:w-[100%] w-[100%] bg-blue-300 bg-opacity-65 border p-2 h-12  outline-none px-4  rounded-full placeholder:text-stone-900 placeholder:text-opacity-50"
        value={selectedCountry?.name ||  ""}
      >
        <option value="" className="text-stone-950 w-fit">Select Country</option>
        {Country.getAllCountries().map((country) => (
          <option key={country.isoCode} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {/* Animation or Indicator */}
{
    !selectedCountry&&        <div className="p-1 bg-red-600 animate-pulse absolute top-0 right-0  rounded-full"></div>

}

      {selectedCountry && (
        <select  style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}   className="md:w-[100%] w-[100%] bg-blue-300 bg-opacity-65 border p-2 h-12  outline-none px-4  rounded-full placeholder:text-stone-900 placeholder:text-opacity-50" onChange={handleStateChange} value={selectedState?.name || ""}>
          <option value="">Select State</option>
          {State.getStatesOfCountry(selectedCountry.isoCode).map((state) => (
            <option key={state.isoCode} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      )}

      {selectedState && (
        <select  style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}   className="md:w-[100%] w-[100%] bg-blue-300 bg-opacity-65 border p-2 h-12  outline-none px-4  rounded-full placeholder:text-stone-900 placeholder:text-opacity-50" onChange={handleCityChange} value={selectedCity?.name || ""}>
          <option value="">Select City</option>
          {City.getCitiesOfState(selectedState.countryCode, selectedState.isoCode).map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      )}
    </div>
      </div>
  );
}
