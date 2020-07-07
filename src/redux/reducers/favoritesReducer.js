const favoritesReducer = ( state = {}, action ) => {
    switch(action.type){
        case 'POST_TO_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}

export default favoritesReducer;