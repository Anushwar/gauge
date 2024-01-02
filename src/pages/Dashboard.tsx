import styled from '@emotion/styled';
import Layout from '@components/Layout';
import Card from '@components/Card';
import { mq } from '@helpers/style';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  ${mq('md')} {
    flex-direction: row;
  }
`;

const Dashboard = () => {
  return (
    <Layout>
      <DashboardContainer>
        <Card bgColor="#FBFCFD">
          <p
            css={{
              color: '#333',
            }}
          >
            Sales Data
          </p>
        </Card>
        <Card bgColor="#FBFCFD">
          <p
            css={{
              color: '#333',
            }}
          >
            User Statistics
          </p>
        </Card>
      </DashboardContainer>
    </Layout>
  );
};

export default Dashboard;
