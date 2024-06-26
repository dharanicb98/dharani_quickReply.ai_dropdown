import React, { useEffect, useState } from 'react';
import { getProdutData } from '../services';
import SelectDropdown from "../components/dropdown";

const RadioDropdown = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

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

  const handleDropdownChange = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className='ml-[20px] sm:ml-[30px] md:ml-[50px] h-screen flex justify-center items-center'>
      <div className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px]'>
        <SelectDropdown
          options={ListingId}
          onChange={handleDropdownChange}
          placeholder='Search Items'
          label={"Radio Dropdown"}
          className={"w-full mx-4"}
          type='radio'
          labelStyle={"text-xl font-bold mb-4"}
        />
        <div className='mt-10'>
          <p className='mb-2'>Selected Option Title:</p>
          {selectedItemId && (
            <p>{ListingId.find((each) => each.id === selectedItemId)?.value}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RadioDropdown;
