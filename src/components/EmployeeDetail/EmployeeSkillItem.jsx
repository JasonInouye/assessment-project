import React, {useState} from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import {
  Label,
  RatingIndicator,
  TableRow,
  TableCell,
} from "@ui5/webcomponents-react";

function EmployeeSkillItem(skills) {
  const [skillData] = skills.skills;

  const [rating, setRating] = useState('')

  return (
    <div>
      {skillData.map((skill) => {
        return (
          <div key={skill.skillId}>
            <TableRow>
              <TableCell style={{ width: "12px" }}>
                <Label>{skill.skill}</Label>
              </TableCell>
              <TableCell style={{ width: "12px" }}>
                <RatingIndicator
                  Value={skill.rating}
                  style={{ 
                    margin: "25px",
                    position: "relative",
                    left: "20px"
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
