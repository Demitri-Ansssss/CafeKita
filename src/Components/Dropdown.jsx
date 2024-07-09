import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pilih");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-96">
      <div
        className="bg-white border border-gray-300 rounded-md p-4  w-full flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div
            className="p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => handleOptionClick("Bawa Pulang")}
          >
            Bawa Pulang
          </div>
          <div
            className="p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => handleOptionClick("Makan Di Tempat")}
          >
            Makan Di Tempat
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
