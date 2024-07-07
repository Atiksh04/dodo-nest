import React, { useState, useEffect, useRef } from "react";
import DropdownIcon from "./images/arrow-dropdown.svg";

type Option = "Today" | "Yesterday" | "Tomorrow";

// custom date selector component implementation
const CustomDropdown: React.FC<{
  options: Option[];
  selectedOption: Option;
  onSelect: (option: Option) => void;
}> = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    // adding eventlistener to check if user clicks outside the box
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <div
        onClick={handleToggle}
        className="flex items-center cursor-pointer font-semibold mb-2"
      >
        <div>{selectedOption}</div>
        <img
          src={DropdownIcon}
          alt="dropdown"
          className="h-4 w-4 ml-2 rotate-90"
        />
      </div>
      {isOpen && (
        <div className="bg-white w-1/4 border rounded-md absolute z-[20]">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`p-3 cursor-pointer rounded-b-md ${
                option === selectedOption ? "bg-[#f0f0f0]" : "bg-white"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DateSelector: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Option>("Today");
  const handleSelect = (option: Option) => {
    setSelectedDate(option);
  };

  return (
    <div>
      <CustomDropdown
        options={["Today", "Yesterday", "Tomorrow"]}
        selectedOption={selectedDate}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default DateSelector;
