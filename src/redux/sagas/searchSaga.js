import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchQuery(action){
try {
    const searchResults = yield axios.get(`/api/search/${action.payload}`)
    yield put({ type: 'SET_SEARCH', payload: searchResults })
} catch (error) {
    console.log('FAILED SEARCH GET:', error);
}
}

function* searchSaga() {
    yield takeEvery('SEARCH_RECIPES', searchQuery)
}

export default searchSaga;