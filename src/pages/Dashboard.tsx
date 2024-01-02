import Layout from '@components/Layout';
import Card from '@components/Card';

import Chart from '@components/Chart';
import {
  accountStatus,
  employeePerformance,
  netProfit,
  projectCompletion,
  raisedCapital,
} from 'lib/mock/data';
import { DashboardContainer } from '@components/Container';

const Dashboard = () => {
  return (
    <Layout>
      <DashboardContainer>
        <Card bgColor="#FBFCFD">
          <p>Raised Capital</p>
          <Chart type="bar" data={raisedCapital} />
        </Card>
        <Card bgColor="#FBFCFD">
          <p>Account Status</p>
          <Chart type="line" data={accountStatus} />
        </Card>
        <Card bgColor="#FBFCFD">
          <p>Employee Performance</p>
          <Chart
            type="line"
            data={employeePerformance}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </Card>
        <Card bgColor="#FBFCFD">
          <p>Project Completion</p>
          <Chart
            type="bar"
            data={projectCompletion}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
                x: {
                  stacked: true,
                },
              },
            }}
          />
        </Card>
        <Card bgColor="#FBFCFD">
          <p>Net Profit</p>
          <Chart type="doughnut" data={netProfit} />
        </Card>
      </DashboardContainer>
    </Layout>
  );
};

export default Dashboard;
