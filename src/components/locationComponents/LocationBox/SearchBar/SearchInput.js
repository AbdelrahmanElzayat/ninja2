import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";


const SearchInput = (props) => {

  // const colourOptions = [
  //   { value: "1", label: "Ocean", color: "#00B8D9", isFixed: true },
  //   { value: "2", label: "Blue", color: "#0052CC", isDisabled: true },
  //   { value: "3", label: "Purple", color: "#5243AA" },
  //   { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  //   { value: "orange", label: "Orange", color: "#FF8B00" },
  //   { value: "yellow", label: "Yellow", color: "#FFC400" },
  //   { value: "green", label: "Green", color: "#36B37E" },
  //   { value: "forest", label: "Forest", color: "#00875A" },
  //   { value: "slate", label: "Slate", color: "#253858" },
  //   { value: "silver", label: "Silver", color: "#666666" },
  // ];

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "12px" ,
      backgroundColor: "#fff", // Light blue background
      borderColor: state.isFocused ? "#4169e1" : "#dcdcdc", // Royal blue border on focus, light grey otherwise
      boxShadow: state.isFocused ? "0 0 0 1px #4169e1" : null,
      "&:hover": {
        borderColor: "#4169e1", // Royal blue border on hover
      },
      padding: "10px", // Add padding inside the control
      width:"100%",
      direction: 'ltr',
      textAlign:"right",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#4169e1"
        : state.isFocused
          ? "#b0c4de"
          : "#fff", // Light steel blue on focus, white otherwise
      color: state.isSelected ? "#fff" : "#000", // White text for selected option, black otherwise
      "&:hover": {
        backgroundColor: state.isSelected ? "#4169e1" : "#b0c4de", // Keep same background on hover
        color: state.isSelected ? "#fff" : "#000", // Keep same text color on hover
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#a9a9a9", // Dark grey placeholder
      textAlign:"right",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000", // Black text for selected value
      textAlign:"right",

    }),
    input: (provided) => ({
      ...provided,
      color: "#000", // Black text for input
      textAlign:"right",

    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#4169e1", // Royal blue dropdown indicator
      textAlign:"right",

    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "#4169e1", // Royal blue clear indicator
    }),
  };
  return (
    <div className="SearchInput" style={{width:'100%'}}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        // defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        // isRtl={!isRtl}
        isSearchable={isSearchable}
        name="color"
        options={props.options}
        styles={customStyles}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchInput;
