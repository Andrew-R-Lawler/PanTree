const favoritesReducer = ( state = {}, action ) => {
    switch(action.type){
        case 'POST_TO_FAVORITES':
            return action.payload;
        case 'FETCH_SAVED_FAVORITE':
            return action.payload;
        case 'DELETE_FAVORITE':
            return action.payload;
        default:
            return state;
    }
}

export default favoritesReducer;