import { initialState } from "../states/log";
import { addLogInit, addLogSuccess, addLogFail } from "../actions/log";
import { actionTypes } from "../constants/actionTypes/log";

const logReducer = (state = initialState, { type, error, payload }) => {
  switch (type) {
    case actionTypes.ADD_LOG_INIT:
      return {
        ...state,
        status: "init",
        error: null,
        data: state.data,
      };

    case actionTypes.ADD_LOG_SUCCESS:
      return {
        ...state,
        status: "success",
        error: null,
        data: [...state.data, payload],
      };

    case actionTypes.ADD_LOG_FAIL:
      return {
        ...state,
        status: "fail",
        error,
        data: [],
      };

    default:
      return state;
  }
};

function addLog(data) {
  return async (dispatch) => {
    try {
      dispatch(addLogInit());
      dispatch(addLogSuccess(data));
    } catch (error) {
      dispatch(addLogFail(error));
    }
  };
}

export { logReducer, addLog };
