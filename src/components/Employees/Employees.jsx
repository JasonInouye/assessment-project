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

    const handleEmployeeDetailClick = () => {
        console.log('Employees Clicked');
        navigate("/employeesDetails");
      };

    return  (
        <div>
        <Title>Dev Team</Title>
        <div>
            {employees.map((employees) => {
                return(
                    <div key={employees.employeeId}>
                        
                        <Grid>
                            <div           
                                data-layout-indent="XL3 L3 M3 S1"
                                data-layout-span="XL6 L6 M6 S6"
                            >
                                <Card
                                header={<CardHeader avatar={<img src={employees.image} />} titleText={employees.title} onClick={handleEmployeeDetailClick} />}
                                style={{ width: "375px", ...spacing.sapUiContentPadding }}
                                >
                                    <List>
                                        <StandardListItem onClick={handleEmployeeDetailClick}>
                                            {employees.fname+' '+employees.lname}
                                        </StandardListItem>
                                    </List>
                                </Card>
                            </div>
                        </Grid>
                    </div>
                )
            })}
        </div>
        </div>
    )
  
}

export default Employees