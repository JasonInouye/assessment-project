import React, { useState } from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Bar,
  Button,
  Label,
  RatingIndicator,
  TableRow,
  TableCell,
  Dialog,
} from "@ui5/webcomponents-react";

function EmployeeSkillItem(skills) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employeeDetails = useSelector((store) => store.singleEmployeeDetails);

  const skillData = skills.skills;
  const employeeId = skills.employeeId;

  const handleRatingUpdate = (updData) => {
    //setRating(rating)
    console.log('Clicked UPDATE', updData);
    dispatch({ type: "EDIT_EMP_SKILL", payload: updData})
  }
 
  return (
    <div>
      {skillData.map((skill) => {
        return (
          <div key={skill.skillId}>
            <TableRow style={{ width: "450px" }}>
              <TableCell style={{ width: "225px" }}>
                <Label>{skill.skill}</Label>
              </TableCell>
              <TableCell style={{ width: "225px" }}>
                <RatingIndicator
                  Value={skill.rating}

                  //onChange={(event) => setRating(event.target.value)}
                  onChange={(event) => {handleRatingUpdate({skills: skill, rating: event.target.value, employeeId: skills.employeeId})}}
                  style={{
                    margin: "25px",
                    position: "relative",
                    left: "20px",
                  }}
                />
              </TableCell>
            </TableRow>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeSkillItem;
