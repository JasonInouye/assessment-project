import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { spacing } from "@ui5/webcomponents-react-base";
import {
  AnalyticalTable,
  Avatar,
  Card,
  CardHeader,
  Grid,
  Icon,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/list";
import "@ui5/webcomponents-icons/dist/account";
import "@ui5/webcomponents-icons/dist/product";

const tableData = [
  {
    skill: "SAP UI5",
    rating: 5,
  },
  {
    skill: "Github",
    rating: 3,
  },
  {
    skill: "MySQL",
    rating: 4,
  },
  {
    skill: "SAP Fiori",
    rating: 2,
  },
  {
    skill: "React",
    rating: 4,
  },
  {
    skill: "Open UI5",
    rating: 4,
  },
  {
    skill: "SAP UI5 webcomponents",
    rating: 4,
  },
  {
    skill: "AWS",
    rating: 2,
  },
];

const tableColumns = [
  {
    Header: "Skill",
    accessor: "skill", // String-based value accessors!
  },
  {
    Header: "Rating",
    accessor: "rating",
  },
];

const projectData = [
  {
    project: 12345,
    company: "Target",
    completedDate: "11/21/2021",
  },
  {
    project: 67890,
    company: "3M",
    completedDate: "03/21/2021",
  },
  {
    project: 9876553,
    company: "Cargill",
    completedDate: "In Progress",
  },
];

const projectColumns = [
  {
    Header: "Project Number",
    accessor: "project",
  },
  {
    Header: "Company",
    accessor: "company",
  },
  {
    Header: "Completed Date",
    accessor: "completedDate",
  },
];

function EmployeeDetail() {
  let params = useParams();
  const dispatch = useDispatch();
  

  

  useEffect(() => {
    dispatch({ type: "GET_EMP_DETAILS", payload: 1 });
  }, []);

  const abc = useSelector((store) => store.singleEmployeeDetails);

  console.log("why is this not working", abc);


  //console.log("this is in the details", employeeDetail);

  return (
    <Grid>
      {abc.map((employeeDetail) => {
        return (
          <div
            data-layout-indent="XL4 L4 M4 S1"
            data-layout-span="XL1 L1 M1 S1"
            key={employeeDetail.employeeId}
          >
            {/* <Card
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
              {employeeDetail.skills.map((skills) => {
                return (
                  <div key={skills.skillId}>
                    <AnalyticalTable
                      data={skills.skill}
                      columns={skills.rating}
                      visibleRows={6}
                      filterable={true}
                      groupable={true}
                    />
                  </div>
                );
              })}
            </Card> */}
            {/* 
            <Card
              header={
                <CardHeader
                  titleText="Interested"
                  subtitleText="Skills"
                  avatar={<Icon name="list" />}
                  interactive
                />
              }
              style={{ width: "450px", ...spacing.sapUiContentPadding }}
            >
              <List>
                <StandardListItem>ABAP</StandardListItem>
                <StandardListItem>ODATA</StandardListItem>
              </List>
            </Card> */}

            {/* </div>

            <div> */}
            <Card
              header={
                <CardHeader
                  titleText={employeeDetail.fname + " " + employeeDetail.lname}
                  subtitleText={employeeDetail.title}
                  avatar={<Icon name="account" />}
                  interactive
                />
              }
              style={{
                width: "450px",
                height: "500px",
                ...spacing.sapUiContentPadding,
              }}
            >
              <Avatar
                colorScheme="Accent6"
                shape="Square"
                size="XL"
                style={{
                  width: "450px",
                  height: "450px",
                  objectfit: "cover",
                  ...spacing.sapUiContentPadding,
                }}
              >
                <img src="profile1.jpg" />
              </Avatar>
            </Card>

            <Card
              header={
                <CardHeader
                  titleText="Projects"
                  subtitleText="Past and Current Projects"
                  avatar={<Icon name="product" />}
                  interactive
                />
              }
              style={{ width: "450px", ...spacing.sapUiContentPadding }}
            >
              <AnalyticalTable
                data={projectData}
                columns={projectColumns}
                visibleRows={6}
                filterable={true}
                groupable={true}
              />
            </Card>
          </div>
        );
      })}
    </Grid>
  );
}

export default EmployeeDetail;
