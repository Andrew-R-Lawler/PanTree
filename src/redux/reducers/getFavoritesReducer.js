const getFavoritesReducer = ( state = [], action) => {
    switch(action.type){
        case 'SET_FAVORITES':
            return action.payload.data;
        default:
            return state;
    }
}

export default getFavoritesReducer;