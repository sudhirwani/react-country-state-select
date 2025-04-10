import { useEffect, useState, useMemo } from "react";
import SelectComponent from "./SelectComponent";
import { countryData } from "./CountryData";

const CountryStateDropDown = ({ getCountry, getState }) => {
  const [stateList, setStateList] = useState([]);
  const [capitol, setCapitol] = useState("");

  const onCountryChange = (value) => {
    const res = getCountryData(value);
    setStateList(res[0]?.states);
    setCapitol(res[0]?.capital);
    getCountry(value.target.value);
  };

  const getCountryData = (value) => {
    return countryData.filter((data) => data.name == value.target.value);
  };

  const onStateChange = (e) => {
    getState(e.target.value);
  };

  return (
    <div className="country-div">
      <SelectComponent
        list={countryData}
        label={"Country List"}
        onOptionChange={onCountryChange}
      />
      <div>
        <span>{`Capitol => ${capitol}`} </span>
      </div>
      <SelectComponent
        list={stateList}
        label={"State List"}
        onOptionChange={onStateChange}
      />
    </div>
  );
};

export default CountryStateDropDown;
