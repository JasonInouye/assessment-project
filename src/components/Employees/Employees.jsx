import React from 'react';
import {spacing} from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents-icons/dist/person-placeholder.js";
import {
    Avatar, 
    Card, 
    CardHeader,
    Icon,
    List, 
    ShellBar, 
    ShellBarItem, 
    StandardListItem,
    Text,
    Title} from '@ui5/webcomponents-react';

function Employees() {
  return <div>

        <div>
            <Title>Dev Team</Title>
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
    </div>
  
}

export default Employees