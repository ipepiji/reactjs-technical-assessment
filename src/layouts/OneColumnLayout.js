import { Layout } from "antd";

import ContentContainer from "utils/components/ContentContainer";
import ContentRoutes from "routes/ContentRoutes";

const { Header, Content } = Layout;

const OneColumnLayout = () => {
  return (
    <Layout>
      <Header className="header-section">Google Place Autocomplete</Header>
      <Content className="content-section">
        <ContentContainer>
          <ContentRoutes />
        </ContentContainer>
      </Content>
    </Layout>
  );
};

export default OneColumnLayout;
