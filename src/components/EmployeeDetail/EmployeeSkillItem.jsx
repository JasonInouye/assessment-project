import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import {
  Label,
  TableRow,
  TableCell,
} from "@ui5/webcomponents-react";

function EmployeeSkillItem(skills) {
  
  const [skillData] = skills.skills;

  return (
    <div>
      {skillData.map((skill) => {
        return (
          <div key={skill.skillId}>
            <TableRow style={{ width: "12px" }}>
              <TableCell>
                <Label>{skill.skill}</Label>
              </TableCell>
              <TableCell style={{ width: "42px" }}>
                <Label>{skill.rating}</Label>
              </TableCell>
            </TableRow>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeSkillItem;
