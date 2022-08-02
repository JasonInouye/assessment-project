let initialState = [
    {
        skillId: 1,
        skill: 'SAPUI5',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 2,
        skill: 'ABAP',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 3,
        skill: 'React',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 4,
        skill: 'SAP Fiori',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 5,
        skill: 'VUE',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 6,
        skill: 'SAP HANA',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 7,
        skill: 'SAP Graph',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 8,
        skill: 'JavaScript',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 9,
        skill: 'AWS',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 10,
        skill: 'Figma',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 11,
        skill: 'SAP AI Launchpad',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        skillId: 12,
        skill: 'ODATA',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
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