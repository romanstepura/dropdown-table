import { UPDATE_TABLE, LOAD_DROPDOWN } from '../types';

const initialState = {
  departments: [],
  selectedDepartment: 0,
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
    default:
      return state;
  }
};
