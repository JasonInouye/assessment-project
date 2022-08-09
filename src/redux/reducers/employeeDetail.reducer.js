let employeeData = [
    {
        employeeId: 1,
        fname: 'John',
        lname: 'Henry',
        image: 'profile1.jpg',
        title: 'Associate Developer',
        skills: [
            {
                skillId: 1,
                skill: 'SAPUI5',
                rating: 4
            },
            {
                skillId: 2,
                skill: 'ABAP',
                rating: 3
            },
            {
                skillId: 3,
                skill: 'React',
                rating: 3
            },
            {
                skillId: 4,
                skill: 'SAP Fiori',
                rating: 4
            },
            {
                skillId: 10,
                skill: 'Figma',
                rating: 2
            },
            {
                skillId: 8,
                skill: 'JavaScript',
                rating: 4
            },
            {
                skillId: 13,
                skill: 'COBOL',
                rating: 5
            },
            {
                skillId: 9,
                skill: 'AWS',
                rating: 2
            },
        ],
        projects: [
            {
                projectId: 1,
                projectCompany: '3M',
                projectDate: '2/15/21'
            },
            {
                projectId: 2,
                projectCompany: 'Target',
                projectDate: '11/15/21'
            },
            {
                projectId: 3,
                projectCompany: 'Cargill',
                projectDate: '11/15/20'
            },
        ]
    },
    {
        employeeId: 2,
        fname: 'Luisa',
        lname: 'Madrigal',
        image: 'profile2.jpg',
        title: 'Senior Developer',
        skills: [
            {
                skillId: 1,
                skill: 'SAPUI5',
                rating: 4
            },
            {
                skillId: 2,
                skill: 'ABAP',
                rating: 3
            },
            {
                skillId: 3,
                skill: 'React',
                rating: 3
            },
            {
                skillId: 4,
                skill: 'SAP Fiori',
                rating: 4
            },
            {
                skillId: 10,
                skill: 'Figma',
                rating: 2
            }
        ],
        projects: [
            {
                projectId: 1,
                projectCompany: '3M',
                projectDate: '2/15/21'
            },
            {
                projectId: 2,
                projectCompany: 'Target',
                projectDate: '11/15/21'
            },
            {
                projectId: 3,
                projectCompany: 'Cargill',
                projectDate: '11/15/20'
            },
        ]
    },
    {
        employeeId: 3,
        fname: 'Bruno',
        lname: 'Henry',
        image: 'profile3.jpg',
        title: 'ABAP Developer',
        skills: [
            {
                skillId: 1,
                skill: 'SAPUI5',
                rating: 4
            },
            {
                skillId: 2,
                skill: 'ABAP',
                rating: 3
            },
            {
                skillId: 3,
                skill: 'React',
                rating: 3
            },
            {
                skillId: 4,
                skill: 'SAP Fiori',
                rating: 4
            },
            {
                skillId: 10,
                skill: 'Figma',
                rating: 2
            }
        ],
        projects: [
            {
                projectId: 1,
                projectCompany: '3M',
                projectDate: '2/15/21'
            },
            {
                projectId: 2,
                projectCompany: 'Target',
                projectDate: '11/15/21'
            },
            {
                projectId: 3,
                projectCompany: 'Cargill',
                projectDate: '11/15/20'
            },
        ]
    },
    {
        employeeId: 4,
        fname: 'Marc',
        lname: 'Cuban',
        image: 'profile4.jpg',
        title: 'SAP Expert',
        skills: [
            {
                skillId: 1,
                skill: 'SAPUI5',
                rating: 4
            },
            {
                skillId: 2,
                skill: 'ABAP',
                rating: 4
            },
            {
                skillId: 3,
                skill: 'React',
                rating: 4
            },
            {
                skillId: 4,
                skill: 'SAP Fiori',
                rating: 4
            },
            {
                skillId: 10,
                skill: 'Figma',
                rating: 2
            }
        ],
        projects: [
            {
                projectId: 1,
                projectCompany: '3M',
                projectDate: '2/15/21'
            },
            {
                projectId: 2,
                projectCompany: 'Target',
                projectDate: '11/15/21'
            },
            {
                projectId: 3,
                projectCompany: 'Cargill',
                projectDate: '11/15/20'
            },
        ]
    },
]

const singleEmployeeDetails = (state = [], action) => { 
    switch (action.type) {
        case 'GET_EMP_DETAILS':      
            state = employeeData.filter(employees => Number(employees.employeeId) === Number(action.payload))
            console.log('Reducer Single Request', state);
            return state;
        // case 'EDIT_SKILL':  
        //     let updEmployeeDetails = Object.assign(state, {skillId: action.payload.skillId, rating: action.payload.skillRating})    
        //     console.log('Employee Reducer', action);
        //     return [...state]
        case 'EDIT_EMP_SKILL':
            console.log('Edit Log', action.payload.skills.skillId);
            const updEmp = employeeData.map( obj => {
                if (obj.employeeId === Number(action.payload.employeeId)) {
                    let arr1=(obj.skills)
                    let updSkills = arr1.filter(updSkill => updSkill.skillId === action.payload.skills.skillId)
                    for ( const updSkill of updSkills ) {
                        updSkill.rating = action.payload.rating
                    }
                    console.log('This is the New SKILL Array', arr1);
                    return {...obj, skills: arr1}
                }
            })
            console.log('sigh', updEmp);
            const newArray = updEmp.filter( function(updatedRecord){
                return updatedRecord !== undefined;
            });
            console.log('winner winner chicken dinner', newArray[0]);

            let employeeObj = newArray[0]

            console.log('My new object', employeeObj);

            const indexOfUpdEmployee = employeeData.findIndex(object => {
                return object.employeeId === action.payload.employeeId
            })

            employeeData.splice(indexOfUpdEmployee, action.payload.employeeId )

            console.log('Woot Woot', employeeData);

            employeeData.push(employeeObj)

            console.log('is it finally over', employeeData);

            return [...state];
        default:
            return state;
    }
}

export default singleEmployeeDetails