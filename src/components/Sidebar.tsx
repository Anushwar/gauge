import styled from '@emotion/styled';
import { mq } from '@helpers/style';

const Sidebar = styled.aside`
  height: auto;
  padding: 20px;
  border-bottom: 2px solid #e5e8eb;

  ${mq('md')} {
    width: 250px;
    height: auto; // Adjust height if header/footer is present
    border-right: 2px solid #e5e8eb;
  }
`;

export default Sidebar;
