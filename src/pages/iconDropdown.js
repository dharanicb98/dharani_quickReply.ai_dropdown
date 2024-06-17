import React, { useEffect, useState } from 'react';
import Dropdown from '../components/dropdown/dropdown';
import { getProdutData } from '../services';



const IconDropdown = () => {
  const [data, setData] = useState([]);

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

  return (
    <div className='h-screen my-20 mx-10 p-4'>
        <h1 className="text-3xl font-bold mb-4">ICON Dropdown</h1>
        <Dropdown
          label="Dropdown Label"
          labelVisibility="Visible"
          status="Unfilled"
          labelIconVisibility="Visible"
          leftIconVisibility="Visible"
          helperText="Helper text goes here"
          required="No"
          text="Select an option"
          type="SingleNoIcon"
          activeItemIndex={-1}
          items={data?.map((each) => each.title)}
        />
        </div>
);
};

export default IconDropdown;
