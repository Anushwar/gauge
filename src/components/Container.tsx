import styled from '@emotion/styled';
import { mq } from '@helpers/style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  ${mq('md')} {
    flex-direction: row;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  ${mq('md')} {
    flex-direction: column;
  }
`;

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  ${mq('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { Container, LayoutContainer, DashboardContainer };
