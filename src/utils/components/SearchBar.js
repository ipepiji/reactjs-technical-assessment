import { useState } from "react";
import { AutoComplete } from "antd";

import { selectMapper } from "utils/helpers/mapper";

const SearchBar = ({
  storeInputLog,
  storeSearchLog,
  getOptions,
  labelKey,
  valueKey,
}) => {
  const [options, setOptions] = useState([]);

  const handleSearch = (input) => {
    if (input.trim()) {
      storeInputLog(input);
      getOptions(input)
        .then((res) => {
          setOptions(
            selectMapper({
              data: res,
              labelKey,
              valueKey,
            })
          );
        })
        .catch((error) => {
          console.error(error);
          setOptions([]);
        });
    } else setOptions([]);
  };

  const handleSelect = (input) => {
    storeInputLog(input);
    storeSearchLog(input);
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
