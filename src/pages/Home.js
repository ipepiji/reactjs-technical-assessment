import { useRef } from "react";
import { useSelector } from "react-redux";
import { Space } from "antd";

import googleMap from "services/googleMap";
import SearchBar from "utils/components/SearchBar";
import ListContainer from "utils/components/ListContainer";
import useSearchLogger from "utils/hooks/useSearchLogger";
import { objectSorter } from "utils/helpers/sorter";

const Home = () => {
  const data = useSelector((state) => state.logs.data);
  const sessionTokenRef = useRef();
  const { currLog, storeSearchLog, setCurrLog } = useSearchLogger();

  const getOptions = (input) => {
    return googleMap.getSuggestions(input, sessionTokenRef);
  };

  return (
    <Space direction="vertical" size="large" className="component-gap">
      <SearchBar
        currLog={currLog}
        storeSearchLog={storeSearchLog}
        setCurrLog={setCurrLog}
        getOptions={getOptions}
        labelKey="description"
        valueKey="description"
      />
      <ListContainer
        data={objectSorter({
          data,
          valueKey: "timestamp",
          order: "DESC",
        })}
      />
    </Space>
  );
};

export default Home;
