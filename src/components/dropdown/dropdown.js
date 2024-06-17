import React, { useState } from 'react';
import { Info, UserCircle } from 'phosphor-react';
import 'tailwindcss/tailwind.css';

const Dropdown = ({
  label,
  labelVisibility,
  status,
  labelIconVisibility,
  leftIconVisibility,
  helperText,
  required,
  text,
  type,
  activeItemIndex,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(activeItemIndex);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  const dropdownClass = `relative inline-block w-full`;
  const dropdownContentClass = `absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 ${isOpen ? 'block' : 'hidden'}`;

  return (
    <div className={dropdownClass}>
      {labelVisibility === 'Visible' && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {labelIconVisibility === 'Visible' && <Info size={16} className="inline ml-2 text-gray-400" />}
          {required === 'Yes' && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div
        className={`mt-1 flex items-center border ${
          status === 'Error' ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm px-3 py-2 cursor-pointer ${status === 'Disabled' ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
        onClick={status !== 'Disabled' ? toggleDropdown : undefined}
      >
        {leftIconVisibility === 'Visible' && <UserCircle size={24} className="text-gray-400 mr-2" />}
        <span className="flex-1">{text}</span>
        <span className="ml-2">&#x25bc;</span>
      </div>
      <div className={dropdownContentClass}>
        {type === 'Multi'
          ? items.map((item, index) => (
              <div
                key={index}
                className={`p-2 hover:bg-gray-200 ${selectedIndex === index ? 'bg-gray-100' : ''}`}
                onClick={() => handleSelect(index)}
              >
                <input type="checkbox" className="mr-2" checked={selectedIndex === index} readOnly />
                {item}
              </div>
            ))
          : items.map((item, index) => (
              <div
                key={index}
                className={`p-2 hover:bg-gray-200 ${selectedIndex === index ? 'bg-gray-100' : ''}`}
                onClick={() => handleSelect(index)}
              >
                <input type="radio" className="mr-2" checked={selectedIndex === index} readOnly />
                {item}
              </div>
            ))}
      </div>
      {helperText && <p className="mt-2 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default Dropdown;
