import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import pantreeItem from './panTreeItemReducer';
import pantreeInventory from './panTreeInventoryReducer';
import search from './searchReducer';
import results from './resultsReducer';
import favorites from './favoritesReducer';
import getFavorites from './getFavoritesReducer';
import shoppingList from './shoppingListReducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  pantreeItem, // will have the value of the newest pantree item
  pantreeInventory, // will contain list of pantry_items
  search, // contains current search query
  results, // contains results from the search query
  favorites, // contains favorite recipe to post
  getFavorites, // collects user favorites data
  shoppingList, // contains list of items to purchase
});

export default rootReducer;
