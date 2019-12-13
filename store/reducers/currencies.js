import { UPDATE_TABLE, LOAD_DROPDOWN, LOAD_TABLE } from '../types';

const initialState = {
  departments: [],
  selectedDepartment: null,
  currencies: [],
};

export const currencyDepartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DROPDOWN:
      return {
        ...state,
        departments: action.payload,
      };
    case UPDATE_TABLE:
      return {
        ...state,
        selectedDepartment: action.payload,
      };
    case LOAD_TABLE:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
};
