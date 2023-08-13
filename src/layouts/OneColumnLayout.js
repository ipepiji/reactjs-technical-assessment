import PageContainer from "utils/components/PageContainer";
import ContentRoutes from "routes/ContentRoutes";

const OneColumnLayout = () => {
  return (
    <div className="page-section">
      <PageContainer>
        <ContentRoutes />
      </PageContainer>
    </div>
  );
};

export default OneColumnLayout;
