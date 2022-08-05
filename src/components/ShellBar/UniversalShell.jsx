import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";

import "@ui5/webcomponents-icons/dist/add-equipment";
import "@ui5/webcomponents-icons/dist/employee-lookup";
import "@ui5/webcomponents-icons/dist/product";
import "@ui5/webcomponents-icons/dist/employee-pane";

function UniversalShell() {
  const navigate = useNavigate();

  // const handleEmployeeSearchClick = () => {
  //   console.log("Employees Clicked");
  //   navigate("/employees");
  // };

  const handleEmployeeDetailClick = () => {
    console.log("EmployeeDetail Clicked");
    navigate("/employeeDetail/1");
  };

  const handleNewSkillClick = () => {
    console.log("Skill Page Clicked");
    navigate("/skills");
  };

  return (
    <>
      <ShellBar
        logo={<img src="mindsetlogo.png" />}
        primaryTitle="Mindset Employee Skill Tracking Application"
        // profile={
        //   <Avatar onClick={handleEmployeeDetailClick}>
        //     <img src="https://raw.githubusercontent.com/sap-tutorials/Tutorials/master/tutorials/ui5-webcomponents-react-dashboard/profilePictureExample.png" />
        //   </Avatar>
        // }
      >
        <ShellBarItem
          icon="add-equipment"
          text="Add"
          onClick={handleNewSkillClick}
        />
        <ShellBarItem
          icon="employee-pane"
          text="Add"
          onClick={handleEmployeeDetailClick}
        />
        {/* <ShellBarItem
          icon="employee-lookup"
          text="employees"
          onClick={handleEmployeeSearchClick}
        />
        <ShellBarItem
          icon="product"
          text="Project Page"
          onClick={handleEmployeeDetailClick}
        /> */}
      </ShellBar>
    </>
  );
}

export default UniversalShell;
