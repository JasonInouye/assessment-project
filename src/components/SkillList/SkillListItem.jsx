import React from "react";
import { useSelector } from "react-redux";
import { spacing } from "@ui5/webcomponents-react-base";
import { Button, RatingIndicator } from "@ui5/webcomponents-react";

function SkillListItem(skills) {
  const empSkills = useSelector((store) => store.employeeDetails);
  console.log(empSkills);
  return (
    <div style={{ ...spacing.sapUiContentPadding }}>
      {empSkills.map((skill) => {
        return (
          <>
            <RatingIndicator
              value={skill.rating}
              onChange={function noRefCheck() {}}
              style={{ ...spacing.sapUiContentPadding }}
            />
            <Button
              onClick={function noRefCheck() {}}
              style={{ marginLeft: "80px" }}
            >
              Interested
            </Button>
          </>
        );
      })}
    </div>
  );
}

export default SkillListItem;
