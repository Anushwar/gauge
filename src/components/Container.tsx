import styled from '@emotion/styled';
import { mq } from '@helpers/style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${mq('md')} {
    flex-direction: row;
  }
`;

export default Container;
