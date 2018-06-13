import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
import { Reducers } from './reducers';
import localStorage from '../utils/localStorage';

const initialState = {
  todos: localStorage.get('tasks') || []
};

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const finalCreateStore = compose(
  applyMiddleware(thunk),
  process.env.NODE_ENV !== 'production' && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const store = finalCreateStore(
  Reducers,
  initialState,
);

export default store;
