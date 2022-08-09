let skillList = [
    {
        skillId: 1,
        skill: 'SAPUI5',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 2,
        skill: 'ABAP',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 3,
        skill: 'React',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 4,
        skill: 'SAP Fiori',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 5,
        skill: 'VUE',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 6,
        skill: 'SAP HANA',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 7,
        skill: 'SAP Graph',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 8,
        skill: 'JavaScript',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 9,
        skill: 'AWS',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 10,
        skill: 'Figma',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 11,
        skill: 'SAP AI Launchpad',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 12,
        skill: 'ODATA',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
        skillId: 13,
        skill: 'COBOL',
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget feugiat nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },

];

const skills = (state = [], action) => { 
    switch (action.type) {
        case 'GET_SKILLS':
            state = skillList;
            return state;
        case 'EMP_SKILL_LIST':
            let arr1 = action.payload.skillList
            console.log('This is the DB Skill List', skillList);
            console.log('This is the Employee Skill List', arr1);

            const finalDisplay = skillList.map( obj => {
                console.log('Each DB Skill!!!', obj.skillId);
                let updRatings = arr1.filter(updRating => updRating.skillId === obj.skillId)
                console.log('Look HEREHERE', obj.rating);
                for ( const updRating of updRatings ){
                    obj.rating = updRating.rating
                }
            });
            console.log('Each DB Skill!!!!!!!!', skillList);
            return skillList
        default:
            return state;
    }
}

export default skills