import React, { useState } from "react";
import {
  Bar,
  Button,
  Label,
  RatingIndicator,
  TableRow,
  TableCell,
  Dialog,
} from "@ui5/webcomponents-react";

function EmployeeSkillDialog(skill) {


  const handleCloseEditBox = () => {
    setOpen(false);
  };

  console.log('Dialog Box', skill);

  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      headerText={skill.skillId}
      footer={
        <Bar
          design="Footer"
          endContent={<Button onClick={handleCloseEditBox}>Close</Button>}
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
    </Dialog>
  );
}

export default EmployeeSkillDialog;
