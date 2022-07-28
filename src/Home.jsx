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
    Title} from '@ui5/webcomponents-react';

function Home() {
  return <div>
        <ShellBar
            logo={<img src="mindsetlogo.png" />}
            primaryTitle="Dev Team"
            profile={
                <Avatar>
                    <img src="https://raw.githubusercontent.com/sap-tutorials/Tutorials/master/tutorials/ui5-webcomponents-react-dashboard/profilePictureExample.png" />
                </Avatar>
            }
        >
            <ShellBarItem></ShellBarItem>
        </ShellBar>
        <div>
        
            <Card
            header={<CardHeader avatar={<Icon name="person-placeholder" />} subtitleText="Associate Developer" titleText="Jason Inouye"/>}
            style={{ width: "300px", ...spacing.sapUiContentPadding }}
            >
            </Card>
        </div>
    </div>
  
}

export default Home