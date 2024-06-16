import React, { useEffect, useState } from 'react';
import { getProdutData } from '../services';
import SelectDropdown from "../components/dropdown";

const Checkbox = () => {
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
    <div className='ml-[50px] h-screen flex justify-center mt-20'>
      <div className=''>
      <SelectDropdown
        options={ListingId}
        onChange={handleDropdownChange}
        placeholder='Search Items'
        label={"Search Dropdown"}
        className={"w-[350px]"}
        type='checkbox'
      />
      <p className='mt-10'>Selected Option ID: {selectedItemId}</p>
      </div>
    </div>
  );
};

export default Checkbox;
