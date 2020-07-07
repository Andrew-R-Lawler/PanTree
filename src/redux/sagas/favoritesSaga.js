import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postFavorite (action) {
    try{
        console.log('action.payload', action.payload);
        
        yield axios.post('/api/favorite', {uri: action.payload})
        yield put ({ type: 'GET_FAVORITES' })
    } catch (error) {
        console.log('ERROR POST /search', error);
    }
}

function* favoritesSaga() {
    yield takeEvery('POST_TO_FAVORITES', postFavorite)
}

export default favoritesSaga;