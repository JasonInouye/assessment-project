import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  Icon,
  Label,
  Table,
  TableRow,
  TableCell,
  TableColumn,
} from "@ui5/webcomponents-react";
import EmployeeSkillItem from "./EmployeeSkillItem";

function EmployeeSkill(skills) {
  const [skillData] = skills.skills;
  const employeeId = skills.employeeId
  const dispatch = useDispatch();
  //const employeeId = skills.assign(skills.employeeId)
  const navigate = useNavigate();

  const handleSkillList = (id) => {
    console.log(`skill route clicked`, skillData);
    dispatch({ type: 'EMP_SKILL_LIST', payload: {skillList: skillData, employeeId: employeeId}})
    navigate(`/skills/${[id]}`)
  }

  return (
    <Card
      header={
        <CardHeader
          titleText="Skill List"
          subtitleText="Click here for complete list"
          avatar={<Icon name="add-equipment" />}
          interactive
          onClick={() => handleSkillList(skills.employeeId)}
        />
      }
      style={{ width: "450px", ...spacing.sapUiContentPadding }}
    >
      <Table
        columns={
          <>
            <TableColumn style={{ width: "1rem" }}>
              <Label>Skill</Label>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Rating">
              <Label>Rating</Label>
            </TableColumn>
          </>
        }
        style={{ width: "450p" }}
      >
        <EmployeeSkillItem 
          key={skillData.id}
          skills={skillData}
          employeeId={employeeId}
        />
      </Table>
    </Card>
  );
}

export default EmployeeSkill;
