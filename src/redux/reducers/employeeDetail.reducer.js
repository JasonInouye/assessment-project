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
]

const employeeDetail = (state = employeeData, action) => { 
    switch (action.type) {
        case 'GET_EMP_DETAILS':        
            let employeeDetail = state.filter(employees => employees.employeeId === action.payload)
            console.log('Employee Details', employeeDetail);
            return employeeDetail;
        default:
            return state;
    }
}

export default employeeDetail