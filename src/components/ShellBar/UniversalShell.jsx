import React from 'react'
import {Routes, Route, Navigate, useNavigate} from "react-router-dom"
import {
  Avatar, 
  ShellBar, 
  ShellBarItem
} from '@ui5/webcomponents-react';

import "@ui5/webcomponents-icons/dist/add";
import "@ui5/webcomponents-icons/dist/employee-lookup";
import "@ui5/webcomponents-icons/dist/product";

import Employees from "../Employees/Employees"
import EmployeeItem from "../EmployeeItem/EmployeeItem"



function UniversalShell() {
  const navigate = useNavigate();

  const handleEmployeeSearchClick = () => {
    console.log('Employees Clicked');
    navigate("/employees");
};

  return (<>
    <ShellBar 
      logo={<img src="mindsetlogo.png" />}
      primaryTitle="Mindset Employee Skill Tracking Application" 
      profile={
        <Avatar>
            <img src="https://raw.githubusercontent.com/sap-tutorials/Tutorials/master/tutorials/ui5-webcomponents-react-dashboard/profilePictureExample.png" />
        </Avatar>
        
      }
    >
      <ShellBarItem icon="add" text="Add"/>
      <ShellBarItem icon="employee-lookup" text="employees" onClick={handleEmployeeSearchClick}/>
      <ShellBarItem icon="product" text="Project Page"/>
    </ShellBar>
    <Routes>
      <Route path="/employees" element={<Employees />} />
      <Route path="/employeesDetails" element={<EmployeeItem />} />
      {/* <Route path="/home" element={<Home />} />
      {/* <Route path="/detail" element={<Detail />} /> */}
    </Routes>
    </>  
  )
}

export default UniversalShell