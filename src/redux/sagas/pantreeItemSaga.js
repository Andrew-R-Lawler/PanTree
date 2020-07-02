import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addItem (action) {
    console.log(action.payload);
    yield axios.post('/api/pantree', action.payload)
    yield put ({ type: 'GET_PANTREE_ITEMS' })
}

function* pantreeItemSaga() {
    yield takeEvery('ADD_PANTREE_ITEM', addItem);
}

export default pantreeItemSaga;