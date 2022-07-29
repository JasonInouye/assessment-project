import React from 'react'
import {
  Avatar, 
  ShellBar, 
  ShellBarItem
} from '@ui5/webcomponents-react';

function UniversalShell() {
  return (
    <ShellBar 
      logo={<img src="mindsetlogo.png" />}
      primaryTitle="My App" 
      profile={
        <Avatar>
            <img src="https://raw.githubusercontent.com/sap-tutorials/Tutorials/master/tutorials/ui5-webcomponents-react-dashboard/profilePictureExample.png" />
        </Avatar>
      }
    >
      <ShellBarItem icon="add" text="Add" />
    </ShellBar>
  )
}

export default UniversalShell