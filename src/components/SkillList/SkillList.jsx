import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "@ui5/webcomponents-icons/dist/save";
import {spacing} from '@ui5/webcomponents-react-base'
import {
    Button,
    Card,
    CardHeader,
    Grid,
    RatingIndicator,
    Text
    } from '@ui5/webcomponents-react'

function SkillList() {
    const skills = useSelector((store) => store.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_SKILLS'});
    }, []);

    return (

        <div>
            {skills.map((skillItem) =>{
                return(
                    <div key={skillItem.id}>
                        <Grid>
                            <div 
                            data-layout-indent="XL3 L3 M3 S1"
                            data-layout-span="XL4 L4 M4 S6">                  
                            <Card                
                                header={<CardHeader titleText={skillItem.skill} />}
                                style={{ width: "375px", ...spacing.sapUiContentPadding, margin: "30px" }}
                            >
                                <Text style={{ ...spacing.sapUiContentPadding }}>
                                    {skillItem.description}
                                </Text>
                                <div style={{...spacing.sapUiContentPadding}}>
                                    <RatingIndicator onChange={function noRefCheck(){}} style={{ ...spacing.sapUiContentPadding }}/>
                                    <Button
                                        onClick={function noRefCheck(){}}
                                        style={{marginLeft: "80px" }}
                                    >
                                        Interested
                                    </Button>
                                </div>
                            </Card>
                            </div> 
                        </Grid>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillList