import createStore from 'redux-zero';
import { applyMiddleware } from "redux-zero/middleware";

import actions from './actions';

const logaction = store => next => action => {
  console.log("Current State", store.getState());

  return next(action);
}

export default createStore(
  actions,
  applyMiddleware(logaction)
)