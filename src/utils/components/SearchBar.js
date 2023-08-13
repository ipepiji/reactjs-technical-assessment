import { useState } from "react";
import { AutoComplete } from "antd";

import { selectMapper } from "utils/helpers/mapper";

const SearchBar = ({
  currLog,
  storeSearchLog,
  setCurrLog,
  getOptions,
  labelKey,
  valueKey,
}) => {
  const [options, setOptions] = useState([]);

  const handleSearch = (input) => {
    if (input.trim()) {
      getOptions(input)
        .then((res) => {
          setOptions(
            selectMapper({
              data: res,
              labelKey,
              valueKey,
            })
          );
          const search_results = res.map((obj) => obj[valueKey]);
          const log = { search_results, input };
          setCurrLog(log);
          storeSearchLog(log);
        })
        .catch((error) => {
          console.error(error);
          setOptions([]);
        });
    } else setOptions([]);
  };

  const handleSelect = (selected) => {
    storeSearchLog({ ...currLog, selected });
  };

  return (
    <AutoComplete
      className="search-bar"
      size="large"
      placeholder="Search..."
      options={options}
      onSearch={handleSearch}
      onSelect={handleSelect}
    />
  );
};

export default SearchBar;
