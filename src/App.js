import { useEffect, useState, useMemo } from "react";
import "./styles.css";
import { countryData } from "./CountryData";
import SelectComponent from "./SelectComponent";
import CountryStateDropdown from "./CountryStateDropdown";
import HeritageSites from "./HeritageSites";
export default function App() {
  const [countryName, setCountryName] = useState("");

  const getCountry = (value) => {
    setCountryName(value);
  };

  const getState = (value) => {
    // setCountryName(value);
  };

  return (
    <div className="App">      
      <CountryStateDropdown getCountry={getCountry} getState={getState} />
    </div>
  );
}
