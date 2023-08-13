import { Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const ListContainer = ({ data = [] }) => {
  return (
    <div className="list-scrollbar" id="listScrollbar">
      <InfiniteScroll
        dataLength={data.length}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="listScrollbar"
      >
        <List
          size="large"
          bordered
          header={<div>Logs</div>}
          dataSource={data}
          renderItem={(item) => {
            if (typeof item === "object")
              item = JSON.stringify(item, undefined, 2);
            return <List.Item>{item}</List.Item>;
          }}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ListContainer;
