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

function SkillsDetail(skills) {
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
        {skillData.map((skill) => {
          return (
            <div key={skill.skillId}>
              <TableRow style={{ width: "12rem" }}>
                <TableCell>
                  <Label>{skill.skill}</Label>
                </TableCell>
                <TableCell style={{ width: "12rem" }}>
                  <Label>{skill.rating}</Label>
                </TableCell>
              </TableRow>
            </div>
          );
        })}
      </Table>
    </Card>
  );
}

export default SkillsDetail;
