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

import EmployeeSkillDialog from "./EmployeeSkillDialog";

function EmployeeSkillItem(skills) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employeeDetails = useSelector((store) => store.singleEmployeeDetails);

  const skillData = skills.skills;
  const employeeId = skills.employeeId;

  const [rating, setRating] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenEditBox = (id) => {
    dispatch({ type: "SET_EDIT_SKILL", payload: id });
    console.log("handleOpenEditBox", id);
    // navigate(`/edit/${id}`);
  };

  const handleUpdSkill = (skills) => {
    console.log("handleOpenEditBox", skills);
    // navigate(`/edit/${id}`);
  };

  const handleCloseEditBox = () => {
    setOpen(false);
  };

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
              <TableCell style={{ width: "150px" }}>
                <Label>{skill.skill}</Label>
              </TableCell>
              <TableCell style={{ width: "150px" }}>
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
              <TableCell style={{ width: "150px" }}>
                <Button
                  style={{
                    margin: "25px",
                    justifyContent: "right",
                    left: "20px",
                  }}
                  onClick={() => dispatch({ type: "EDIT_EMP_SKILL", payload: {skills: skill, rating: rating, employeeId: skills.employeeId } })}
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
            {/* <Dialog
              open={open}
              headerText={skill.skillId}
              footer={
                <Bar
                  design="Footer"
                  endContent={
                    <Button onClick={handleCloseEditBox}>Close</Button>
                  }
                />
              }
            >
              <RatingIndicator
                Value={skill.rating}
                style={{
                  margin: "25px",
                  position: "relative",
                  left: "20px",
                }}
              />
            </Dialog> */}
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeSkillItem;
