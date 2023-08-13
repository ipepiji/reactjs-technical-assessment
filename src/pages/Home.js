import { useRef } from "react";
import { Space } from "antd";

import googleMap from "services/googleMap";
import SearchBar from "utils/components/SearchBar";
import ListContainer from "utils/components/ListContainer";
import useSearchLogger from "utils/hooks/useSearchLogger";

const Home = () => {
  const sessionTokenRef = useRef();
  const { inputLog, searchLog, storeInputLog, storeSearchLog } =
    useSearchLogger();

  const getOptions = (input) => {
    return googleMap.getSuggestions(input, sessionTokenRef);
  };

  return (
    <Space direction="vertical" size="large" className="component-gap">
      <SearchBar
        storeInputLog={storeInputLog}
        storeSearchLog={storeSearchLog}
        getOptions={getOptions}
        labelKey="description"
        valueKey="description"
      />
      <ListContainer data={searchLog} />
    </Space>
  );
};

export default Home;
