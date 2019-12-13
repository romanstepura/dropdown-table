import { createStore, combineReducers } from 'redux';
import { currencyDepartmentReducer } from './reducers/currencies';

const rootReducer = combineReducers({
  currency: currencyDepartmentReducer,
});

export default createStore(rootReducer);
