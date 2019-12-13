import { LOAD_DROPDOWN, UPDATE_TABLE } from '../types';

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
