import React from 'react';
import {spacing} from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents-icons/dist/person-placeholder.js";
import  {useNavigate} from "react-router-dom"
import {
    Avatar, 
    Card, 
    CardHeader,
    Grid,
    Icon,
    List, 
    ShellBar, 
    ShellBarItem, 
    StandardListItem,
    Text,
    Title} from '@ui5/webcomponents-react';

function Employees() {
    const navigate = useNavigate();

    const handleEmployeeDetailClick = () => {
        console.log('Employees Clicked');
        navigate("/employeesDetails");
      };

    return  (
        <Grid>
            <div           
                data-layout-indent="XL3 L3 M3 S1"
                data-layout-span="XL6 L6 M6 S6"
            >
                <Title>Dev Team</Title>

                <Card
                header={<CardHeader avatar={<img src="profile1.jpg" />} titleText="Associate Developer" onClick={handleEmployeeDetailClick} />}
                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                >
                    <List>
                        <StandardListItem onClick={handleEmployeeDetailClick}>
                        John Henry
                        </StandardListItem>
                    </List>
                </Card>

                <Card
                header={<CardHeader avatar={<img src="profile2.jpg" />} subtitleText="Senior Developer" titleText="Luisa Madrigal"/>}
                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                >
                </Card>

                <Card
                header={<CardHeader avatar={<img src="profile3.jpg" />} subtitleText="SAP Expert Developer" titleText="Bruno Henry"/>}
                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                >
                </Card>

                <Card
                header={<CardHeader avatar={<img src="profile4.jpg" />} subtitleText="Associate Developer" titleText="Marc Cuban"/>}
                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                >
                </Card>

                <Card
                header={<CardHeader avatar={<img src="profile1.jpg" />} subtitleText="Associate Developer" titleText="John Henry"/>}
                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                >
                </Card>

                <Card
                header={<CardHeader avatar={<img src="profile2.jpg" />} subtitleText="Senior Developer" titleText="Luisa Madrigal"/>}
                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                >
                </Card>

                <Card
                header={<CardHeader avatar={<img src="profile3.jpg" />} subtitleText="SAP Expert Developer" titleText="Bruno Henry"/>}
                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                >
                </Card>

                <Card
                header={<CardHeader avatar={<img src="profile4.jpg" />} subtitleText="Associate Developer" titleText="Marc Cuban"/>}
                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                >
                </Card>
                
            </div>
        </Grid>
  )
  
}

export default Employees