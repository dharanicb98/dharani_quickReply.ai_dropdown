import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Navber from '../components/layout';
import SearchDropdown from '../pages/searchDropdown';
import Checkbox from '../pages/checkbox';
import RadioDropDown from '../pages/radio';


const ProtectedRoutes = () => {
    
  return (
    <div>
        <Navber />
       <Routes>
          <Route path="/" element={<SearchDropdown />} />
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/radio" element={<RadioDropDown />} />
        </Routes>
    </div>
  )
}

export default ProtectedRoutes
