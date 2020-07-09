const shoppingListReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_SHOPPING_LIST':
            return action.payload.data;
        default:
            return state;
    }
}

export default shoppingListReducer;