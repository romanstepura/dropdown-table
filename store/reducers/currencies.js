import {LOAD_DROPDOWN, UPDATE_TABLE} from '../types';

const initialState = {
  departments: [],
  selectedDepartment: 0,
};

export const currenciesDepartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return {
        ...state,
        departments: action.payload,
      };

    case LOAD_DROPDOWN:
      return {
        ...state,
        departments: action.payload,
      };
    default:
      return state;
  }
};
