import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addItem (action) {
    try {
        yield axios.post('/api/pantree', action.payload)
        yield put ({ type: 'GET_PANTREE_ITEMS' })
    }
    catch (error) {
        console.log('FAILED POST:', error);
    }
}

function* getItems (){
    try {
        const pantreeItemResponse = yield axios.get('/api/pantree')
        yield put({ type: 'SET_PANTREE_ITEMS', payload: pantreeItemResponse })
    } catch (error) {
        console.log('FAILED GET:', error);
    }
}

function* deleteItem(action){
    try{
        yield axios.delete(`/api/pantree/${action.payload.item_id}`)
        yield put({ type: 'GET_PANTREE_ITEMS' })
    } catch (error) {
        console.log('FAILED DELETE:', error);
    }
}

function* updateItem(action){
    try{
        yield axios.put(`/api/pantree/${action.payload.item_id}`, action.payload)
        yield put({ type: 'GET_PANTREE_ITEMS' })
    } catch (error) {
        console.log('FAILED PUT:', error);
    }
}

function* pantreeItemSaga() {
    yield takeEvery('ADD_PANTREE_ITEM', addItem);
    yield takeEvery('GET_PANTREE_ITEMS', getItems);
    yield takeEvery('DELETE_PANTREE_ITEM', deleteItem)
    yield takeEvery('UPDATE_PANTREE_ITEM', updateItem)
}

export default pantreeItemSaga;