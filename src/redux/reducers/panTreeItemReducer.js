const panTreeItemReducer = ( state = {}, action ) => {
    switch(action.type) {
        case 'ADD_PANTREE_ITEM':
            return action.payload;
        default:
            return state;
    }
}

// pantree will be on the redux state at:
// state.pantree
export default panTreeItemReducer;