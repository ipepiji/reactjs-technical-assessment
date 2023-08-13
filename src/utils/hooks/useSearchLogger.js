import { useState } from "react";

import { logBuilder } from "utils/helpers/builder";

const useSearchLogger = () => {
  const [inputLog, setInputLog] = useState([]);
  const [searchLog, setSearchLog] = useState([]);

  const storeInputLog = (input) => {
    setInputLog((prevState) => [...prevState, logBuilder(input)]);
  };

  const storeSearchLog = (input) => {
    setSearchLog((prevState) => [...prevState, logBuilder(input)]);
  };

  return {
    inputLog,
    searchLog,
    storeInputLog,
    storeSearchLog,
  };
};

export default useSearchLogger;
