import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'

function CountrySelector({ onChange, value, name,error }) {
  // Generate the country options using useMemo for performance optimization
  const options = useMemo(() => {
    const countryOptions = countryList().getData();
    // console.log(countryOptions); // Log the options to the console
    return countryOptions;
  }, []);

  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      
      className={`mt-1 block w-full border-stone-400 border  outline-none text-stone-950 p-2 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 ${error.length>0&&"bg-red-100"} `}
      >
      {/* Default option */}
      <option value="">Select a country</option>
      
      {/* Mapping over the options to create option elements */}
      {options.map((option, index) => (
        <option key={index} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default CountrySelector
