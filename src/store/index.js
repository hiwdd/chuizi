import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//modules里写你的小仓库并引进来
// import todoReducer from './modules/todo/reducer';
import homeReducer from './modules/home/reducer';
import classifyReducer from './modules/classify/reducer';
import mineReducer from './modules/mine/reducer';
import detailReducer from './modules/detail/reducer';

const composeEnxxx = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // 合并你的小仓库
  combineReducers({
    home: homeReducer,
    classify: classifyReducer,
    mine: mineReducer,
    detail: detailReducer
  }),
  composeEnxxx(applyMiddleware(thunk))
);

export default store;
