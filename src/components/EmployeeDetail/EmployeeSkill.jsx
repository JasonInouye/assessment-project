import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
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

  return (
    <Card
      header={
        <CardHeader
          titleText="Skill List"
          subtitleText="List"
          avatar={<Icon name="list" />}
          interactive
        />
      }
      style={{ width: "450px", ...spacing.sapUiContentPadding }}
    >
      <Table
        columns={
          <>
            <TableColumn style={{ width: "12rem" }}>
              <Label>Skill</Label>
            </TableColumn>
            <TableColumn style={{ width: "12rem" }}>
              <Label>Rating</Label>
            </TableColumn>
          </>
        }
        onLoadMore={function noRefCheck() {}}
        onPopinChange={function noRefCheck() {}}
        onRowClick={function noRefCheck() {}}
        onSelectionChange={function noRefCheck() {}}
      >
        <EmployeeSkillItem 
          key={skillData.id}
          skills={[skillData]}
        />
      </Table>
    </Card>
  );
}

export default EmployeeSkill;
