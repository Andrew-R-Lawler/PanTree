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

function* getItem (){

}

function* pantreeItemSaga() {
    yield takeEvery('ADD_PANTREE_ITEM', addItem);
}

export default pantreeItemSaga;