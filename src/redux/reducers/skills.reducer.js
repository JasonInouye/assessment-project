const skills = (state = ['SAPUI5','Fiori','React','VUE','ABAP'], action) => { 
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default skills