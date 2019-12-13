import { LOAD_DROPDOWN, UPDATE_TABLE, LOAD_TABLE } from '../types';

export const LoadDropdown = data => {
  return {
    type: LOAD_DROPDOWN,
    payload: data,
  };
};
export const UpdateTable = index => {
  return {
    type: UPDATE_TABLE,
    payload: index,
  };
};
export const LoadTable = tableArray => {
  return {
    type: LOAD_TABLE,
    payload: tableArray,
  };
};
