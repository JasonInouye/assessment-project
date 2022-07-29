import React from 'react'
import {spacing} from "@ui5/webcomponents-react-base";
import {
    Card,
    CardHeader,
    Icon,
    List,
    StandardListItem
} from "@ui5/webcomponents-react"

function IndividualItem() {
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
    style={{width: "300px", ...spacing.sapUiContentPadding}}
    >
        <List
        onItemClick={function noRefCheck(){}}
        onItemClose={function noRefCheck(){}}
        onItemDelete={function noRefCheck(){}}
        onItemToggle={function noRefCheck(){}}
        onLoadMore={function noRefCheck(){}}
        onSelectionChange={function noRefCheck(){}}
        >
        <StandardListItem additionalText="3">
            List Item 1
        </StandardListItem>
        <StandardListItem additionalText="2">
            List Item 2
        </StandardListItem>
        <StandardListItem additionalText="1">
            List Item 3
        </StandardListItem>
        </List>
    </Card>
  )
}

export default IndividualItem