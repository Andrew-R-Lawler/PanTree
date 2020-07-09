import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postIngredient (action) {
    try{
        yield axios.post('/api/shopping', action.payload)
        yield put ({ type: 'SET_SHOPPING_LIST' })
    } catch (error) {
        console.log('ERROR FAILED TO POST', error);
    }
}

function* getShoppingList () {
    try{
        const shoppingListResponse = yield axios.get('/api/shopping')
        yield put ({ type: 'SET_SHOPPING_LIST', payload: shoppingListResponse })
    } catch (error) {
        console.log('ERROR FAILED TO GET', error);
    }
}

function* shoppingListSaga(){
    yield takeEvery('POST_TO_SHOPPING_LIST', postIngredient)
    yield takeEvery('GET_SHOPPING_LIST', getShoppingList)
}

export default shoppingListSaga;