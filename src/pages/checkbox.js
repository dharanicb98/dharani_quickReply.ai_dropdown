import React, { useEffect, useState } from 'react';
import { getProdutData } from '../services';
import SelectDropdown from '../components/dropdown';

const Checkbox = () => {
  const [data, setData] = useState([]);
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getProdutData();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let ListingId = data.map((each) => {
    const { title, id } = each;
    return { value: title, id: id };
  });

  const handleDropdownChange = (itemIds) => {
    setSelectedItemIds(Array.isArray(itemIds) ? itemIds : []);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-4'>
        <SelectDropdown
          options={ListingId}
          onChange={handleDropdownChange}
          placeholder='Search Items'
          label={"Checkbox Dropdown"}
          className={"w-full"}
          type='checkbox'
          labelStyle={"text-lg sm:text-xl font-bold mb-4"}
        />
        <div className='mt-10'>
          <p className='mb-2'>Selected Option Titles:</p>
          <ul className='flex flex-col gap-3'>
            {selectedItemIds.map((id) => {
              const selectedItem = ListingId.find((each) => each.id === id);
              return (
                <li key={id}>{selectedItem?.value}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
