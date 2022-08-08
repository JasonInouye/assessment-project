import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {spacing} from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents-icons/dist/person-placeholder.js";
import  {useNavigate} from "react-router-dom"
import {
    Card, 
    CardHeader,
    Grid,
    List, 
    StandardListItem,
    Title} from '@ui5/webcomponents-react';

function Employees() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const employees = useSelector((store) => store.employees)

    useEffect(() => {
        dispatch({ type: 'GET_EMPLOYEES'});
    }, []);

    const handleEmployeeDetailClick = (id) => {
        console.log('Employees Clicked');
        navigate(`/employeeDetail/${[id]}`);
      };

    return  (
        <div>
            <Title>Dev Team</Title>
                <div>
                    <Grid
                        position="center"
                        hSpacing="0rem"
                        vSpacing="0rem"
                    >
                        {employees.map((employees) => {
                            return(
                                <div key={employees.employeeId}
                                    data-layout-indent="XL1 L1 M1 S12"
                                    data-layout-span="XL1 L1 M1 S12"
                                >
                                    <Card
                                        header={<CardHeader avatar={<img src={employees.image} />} titleText={employees.title} onClick={handleEmployeeDetailClick} />}
                                        style={{ width: "375px", ...spacing.sapUiContentPadding }}
                                    >
                                        <List>
                                            <StandardListItem onClick={() => handleEmployeeDetailClick(employees.employeeId)}>
                                                {employees.fname+' '+employees.lname}
                                            </StandardListItem>
                                        </List>
                                    </Card>
                                </div>
                            )
                        })}
                    </Grid>
                </div>
        </div>
    )
  
}

export default Employees