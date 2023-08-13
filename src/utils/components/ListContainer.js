import { List } from "antd";

import { objectSorter } from "utils/helpers/sorter";

const ListContainer = ({ data = [] }) => {
  return (
    <List
      size="large"
      bordered
      header={<div>Logs</div>}
      dataSource={objectSorter({
        data,
        valueKey: "timestamp",
        order: "DESC",
      })}
      renderItem={(item) => (
        <List.Item>{JSON.stringify(item, undefined, 2)}</List.Item>
      )}
    />
  );
};

export default ListContainer;
