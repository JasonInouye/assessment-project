import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
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
    const empSkills = useSelector((store) => store.employeeDetails);
    const {id} = useParams();
    const dispatch = useDispatch();

    const handleAddRating = (updData) => {
        let newSkill = {
            skillId: updData.skills.skillId,
            skill: updData.skills.skill,
            rating: updData.rating
        }
        console.log('This is the newSkill', updData);
        dispatch({ type: "ADD_EMP_SKILL", payload: {employeeId: updData.employeeId, rating: updData.rating, skills: newSkill}})
      }

    useEffect(() => {
        dispatch({ type: 'GET_SKILLS', payload:[id]});
    }, [id]);

    return (
        <div>
            <Grid
                position="center"
                hSpacing="0rem"
                vSpacing="0rem"
            >
                {skills.map((skillItem) =>{
                    return(
                        <div key={skillItem.skillId}
                            data-layout-indent="XL2 L2 M6 S12"
                            data-layout-span="XL1 L1 M3 S12"
                        >
                            <Card                
                                header={<CardHeader titleText={skillItem.skill} />}
                                style={{ width: "375px", ...spacing.sapUiContentPadding, margin: "30px" }}
                            >
                                <Text style={{ ...spacing.sapUiContentPadding }}>
                                    {skillItem.description}
                                </Text>
                                <div style={{...spacing.sapUiContentPadding}}>
                                    <RatingIndicator value={skillItem.rating} onChange={(event) => {handleAddRating({skills: skillItem, rating: event.target.value, employeeId: id})}} style={{ ...spacing.sapUiContentPadding }}/>
                                    <Button
                                        onClick={function noRefCheck(){}}
                                        style={{marginLeft: "80px" }}
                                    >
                                        Interested
                                    </Button>
                                </div>
                            </Card> 
                        </div>
                    )
                })}
            </Grid>
        </div>
    )
}

export default SkillList