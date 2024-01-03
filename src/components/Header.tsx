import styled from '@emotion/styled';
import { mq } from '@helpers/style';

const Header = styled.div`
  display: flex;
  width: '100%';
  justify-content: space-between;
  align-items: center;

  ${mq('md')} {
    display: none;
  }
`;

export default Header;
