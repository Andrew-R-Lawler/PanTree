const panTreeInventoryReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_PANTREE_ITEMS':
            return action.payload.data;
        default:
            return state;
    }
}

export default panTreeInventoryReducer;