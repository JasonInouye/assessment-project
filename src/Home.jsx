import React from 'react'
import {Avatar, ShellBar, ShellBarItem, Title} from '@ui5/webcomponents-react';

function Home() {
  return (
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
  )
}

export default Home