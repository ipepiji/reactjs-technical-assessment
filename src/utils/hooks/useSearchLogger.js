import { useState } from "react";
import { useDispatch } from "react-redux";

import { addLog } from "store/reducers/log";
import { logBuilder } from "utils/helpers/builder";

const useSearchLogger = () => {
  const dispatch = useDispatch();

  const [currLog, setCurrLog] = useState([]);

  const storeSearchLog = (obj) => {
    dispatch(addLog(logBuilder(obj)));
  };

  return {
    currLog,
    storeSearchLog,
    setCurrLog,
  };
};

export default useSearchLogger;
