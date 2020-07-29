import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {mainReducer} from './../redux/MainScreen_reducer';
let reducers = combineReducers({
  mainPage: mainReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));
export default store;
window.store = store;
