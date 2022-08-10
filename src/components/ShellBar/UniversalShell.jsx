import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { useSelector } from "react-redux";

import "@ui5/webcomponents-icons/dist/add-equipment";
import "@ui5/webcomponents-icons/dist/employee-lookup";
import "@ui5/webcomponents-icons/dist/product";
import "@ui5/webcomponents-icons/dist/employee-pane";

function UniversalShell() {
  const navigate = useNavigate();
  const {id} = useParams();
  const empSkills = useSelector((store) => store.employeeDetails);

  const handleEmployeeSearchClick = () => {
    console.log("Employees Clicked");
    navigate("/employees");
  };

  const handleEmployeeDetailClick = (id) => {
    console.log("EmployeeDetail Clicked");
    navigate(`/employeeDetail/${[id]}`);
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
          onClick={() => handleEmployeeDetailClick(empSkills.id)}
        />
        <ShellBarItem
          icon="employee-lookup"
          text="employees"
          onClick={handleEmployeeSearchClick}
        />
        {/* <ShellBarItem
          icon="product"
          text="Project Page"
          onClick={handleEmployeeDetailClick}
        /> */}
      </ShellBar>
    </>
  );
}

export default UniversalShell;
