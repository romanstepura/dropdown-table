import { createStore, combineReducers } from 'redux'
import { postReducer, currenciesDepartmentReducer } from './reducers/currencies'

const rootReducer = combineReducers({
  currency: currenciesDepartmentReducer,
})

export default createStore(rootReducer)
