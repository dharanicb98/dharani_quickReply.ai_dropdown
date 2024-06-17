import React, { useState, useEffect, useRef } from 'react';
import { UserCircle, Info } from 'phosphor-react';

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
  const [selectedItem, setSelectedItem] = useState(text);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderDropdownItems = () => {
    switch (type) {
      case 'SingleNoIcon':
        return (
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer ${index === activeItemIndex ? 'bg-blue-100' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        );
      case 'SingleRadio':
        return (
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer flex items-center ${index === activeItemIndex ? 'bg-blue-100' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <input
                  type="radio"
                  name="dropdown-radio"
                  className="mr-2"
                  checked={index === activeItemIndex}
                  readOnly
                />
                {item}
              </li>
            ))}
          </ul>
        );
      case 'Multi':
        return (
          <ul>
            {items.map((item, index) => (
              <li key={index} className="p-2 cursor-pointer flex items-center">
                <input type="checkbox" className="mr-2" />
                {item}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log(`Item clicked: ${item}`);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {labelVisibility === 'Visible' && (
        <label className="block mb-1">
          {labelIconVisibility === 'Visible' && <Info size={16} className="inline mr-1" />}
          {label} {required && '*'}
        </label>
      )}
      <div
        className={`flex items-center border p-2 cursor-pointer ${status === 'Disabled' ? 'bg-gray-200' : 'bg-white'}`}
        onClick={() => status !== 'Disabled' && setIsOpen(!isOpen)}
      >
        {leftIconVisibility === 'Visible' && <UserCircle size={24} className="mr-2" />}
        <span>{selectedItem}</span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 border bg-white w-full z-10">
          {renderDropdownItems()}
        </div>
      )}
      {helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default Dropdown;
