import { combineReducers } from 'redux';

import todos from '../containers/Todo/reducer';
import filters from '../containers/Filters/reducer';


export const Reducers = combineReducers({
  todos,
  filters
});
