const formReducer = (state, action) => {
    switch(action.type) {
        case 'SUBMIT': 
            return {...action.payload}
        default:
            return state
    }
}

export default formReducer