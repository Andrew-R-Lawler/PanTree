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

function* getFavorites (){
    try{
        const favoritesResponse = yield axios.get('/api/favorite')
        yield put ({ type: 'SET_FAVORITES', payload: favoritesResponse })
    } catch (error) {
        console.log('ERROR GET /FAVORITE', error);
    }
}

function* deleteFavorite (action) {
    try{
        yield axios.delete(`/api/favorite`, { data: {uri: action.payload} })
        yield put ({ type: 'GET_FAVORITES' })
    } catch (error) {
        console.log('ERROR DELETE /FAVORITE', error);
    }
}

function* favoritesSaga() {
    yield takeEvery('POST_TO_FAVORITES', postFavorite)
    yield takeEvery('GET_FAVORITES', getFavorites)
    yield takeEvery('DELETE_FAVORITE', deleteFavorite)
}

export default favoritesSaga;