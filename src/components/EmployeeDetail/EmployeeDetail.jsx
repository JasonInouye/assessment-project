import React from 'react';
import {spacing} from "@ui5/webcomponents-react-base";
import {
    AnalyticalTable,
    Avatar,
    Card,
    CardHeader,
    Grid,
    Icon,
    List,
    StandardListItem
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/list";
import "@ui5/webcomponents-icons/dist/account";
import "@ui5/webcomponents-icons/dist/product";

const tableData = [
    {
      skill: "SAP UI5",
      rating: 5
    },
    {
      skill: "Github",
      rating: 3
    },
    {
      skill: "MySQL",
      rating: 4
    },
    {
      skill: "SAP Fiori",
      rating: 2
    },
    {
      skill: "React",
      rating: 4
    },
    {
      skill: "Open UI5",
      rating: 4
    },
    {
      skill: "SAP UI5 webcomponents",
      rating: 4
    },
    {
      skill: "AWS",
      rating: 2
    }
  ];

const tableColumns = [
    {
      Header: "Skill",
      accessor: "skill" // String-based value accessors!
    },
    {
      Header: "Rating",
      accessor: "rating"
    }
  ];

const projectData = [
    {
      project: 12345,
      company: "Target",
      completedDate: "11/21/2021"
    },
    {
      project: 67890,
      company: "3M",
      completedDate: "03/21/2021"
    },
    {
      project: 9876553,
      company: "Cargill",
      completedDate: "In Progress"
    }
  ];

const projectColumns = [
    {
      Header: "Project Number",
      accessor: "project" 
    },
    {
      Header: "Company",
      accessor: "company"
    },
    {
      Header: "Completed Date",
      accessor: "completedDate"
    }
  ];

function EmployeeDetail() {
  return (
    <Grid>
      <div
          data-layout-indent="XL4 L4 M4 S1"
          data-layout-span="XL1 L1 M1 S1"
      >
          <Card
              header={
                  <CardHeader
                      titleText="Skill List"
                      subtitleText="List"
                      avatar={<Icon name="list" />}
                      interactive
                  />
              }
          style={{width: "450px", ...spacing.sapUiContentPadding}}
          >
              <AnalyticalTable 
                  data={tableData} 
                  columns={tableColumns}
                  visibleRows={6}
                  filterable={true}
                  groupable={true}
              />
          </Card>

          <Card
              header={
                  <CardHeader
                      titleText="Interested"
                      subtitleText="Skills"
                      avatar={<Icon name="list" />}
                      interactive
                  />
              }
          style={{width: "450px", ...spacing.sapUiContentPadding}}
          >
              <List
                  onItemClick={function noRefCheck(){}}
                  onItemClose={function noRefCheck(){}}
                  onItemDelete={function noRefCheck(){}}
                  onItemToggle={function noRefCheck(){}}
                  onLoadMore={function noRefCheck(){}}
                  onSelectionChange={function noRefCheck(){}}
              >
              <StandardListItem>
                  ABAP
              </StandardListItem>
              <StandardListItem>
                  ODATA
              </StandardListItem>
              </List>
          </Card>
          </div>

          <div>
          <Card
              header={
                  <CardHeader
                      titleText="John Henry"
                      subtitleText="Associate Developer"
                      avatar={<Icon name="account" />}
                      interactive
                  />
              }
          style={{width: "450px", height: "500px", ...spacing.sapUiContentPadding}}
          >  
              <Avatar
                  colorScheme="Accent6"
                  shape="Square"
                  size="XL"
                  style={{width: "450px", height: "450px",objectfit: "cover", ...spacing.sapUiContentPadding}}
              >
                  < img src="profile1.jpg" />
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
          style={{width: "450px", ...spacing.sapUiContentPadding}}
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
    </Grid>
  )
}

export default EmployeeDetail