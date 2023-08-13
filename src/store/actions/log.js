import { actionTypes } from "../constants/actionTypes/log";

export const addLogInit = () => {
  return {
    type: actionTypes.ADD_LOG_INIT,
  };
};

export const addLogSuccess = (payload) => {
  return {
    type: actionTypes.ADD_LOG_SUCCESS,
    payload,
  };
};

export const addLogFail = (error) => {
  return {
    type: actionTypes.ADD_LOG_FAIL,
    error,
  };
};
