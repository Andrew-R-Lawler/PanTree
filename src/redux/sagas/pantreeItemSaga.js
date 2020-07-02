import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem (action) {
    yield axios.post()
}

function* pantreeItemSaga() {
    yield takeLatest('ADD_PANTREE_ITEM', addItem);
}

export default pantreeItemSaga;