const initialState = [
    {
        id: 1,
        skill: 'SAPUI5',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 2,
        skill: 'ABAP',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 3,
        skill: 'React',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 4,
        skill: 'SAP Fiori',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 5,
        skill: 'VUE',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 6,
        skill: 'SAP HANA',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 7,
        skill: 'SAP Graph',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 8,
        skill: 'JavaScript',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 9,
        skill: 'AWS',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 10,
        skill: 'Figma',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 11,
        skill: 'SAP AI Launchpad',
        description: 'Build Enterprice-grade web apps with modern, rich user Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla.'
    },
    {
        id: 12,
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