import { useEffect } from "react";

const SelectComponent = ({ list = [], label = "List", onOptionChange }) => {
  const onOptionSelect = (e) => {
    onOptionChange(e);
  };
  
  return (
    <select
      name="country-list"
      onChange={(e) => onOptionSelect(e)}
      className={"custom-select"}
      placeholder={"Select"}
    >
      <option>{label}</option>
      {list ? (
        list.map((item, index) => {
          return (
            <option value={item.name} key={`${index}-${item.name}`}>
              {item?.name}
            </option>
          );
        })
      ) : (
        <option>{"no data"}</option>
      )}
    </select>
  );
};

export default SelectComponent;
