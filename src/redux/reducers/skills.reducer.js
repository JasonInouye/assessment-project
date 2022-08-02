let initialState = [
    {
        skillId: 1,
        skill: 'SAPUI5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 2,
        skill: 'ABAP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 3,
        skill: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 4,
        skill: 'SAP Fiori',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 5,
        skill: 'VUE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 6,
        skill: 'SAP HANA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 7,
        skill: 'SAP Graph',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 8,
        skill: 'JavaScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 9,
        skill: 'AWS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 10,
        skill: 'Figma',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 11,
        skill: 'SAP AI Launchpad',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 12,
        skill: 'ODATA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },

];

const skills = (state = initialState, action) => { 
    switch (action.type) {
        case 'GET_SKILLS':
            return state;
        default:
            return state;
    }
}

export default skills