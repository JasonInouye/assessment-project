import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "@ui5/webcomponents-icons/dist/save";
import {spacing} from '@ui5/webcomponents-react-base'
import {
    Button,
    Card,
    CardHeader,
    RatingIndicator,
    Text
    } from '@ui5/webcomponents-react'

function SkillList() {
    const skills = useSelector((store) => store.skills);

    return (
        <div>
            <Card                
                header={<CardHeader titleText="SAPUI5" />}
                style={{ width: "375px", ...spacing.sapUiContentPadding, margin: "30px" }}
            >
                <Text style={{ ...spacing.sapUiContentPadding }}>
                    Build Enterprice-grade web apps with modern, rich user interfaces.
                </Text>

                <RatingIndicator onChange={function noRefCheck(){}} style={{ ...spacing.sapUiContentPadding }}/>

                <Button
                    onClick={function noRefCheck(){}}
                >
                    Interested
                </Button>
            </Card>
        </div>
    )
}

export default SkillList