import styled from '@emotion/styled';
import { mq } from '@helpers/style';

const Sidebar = styled.aside`
  height: auto;
  padding: 20px;
  border-bottom: 1px solid #e5e8eb;

  ${mq('md')} {
    width: 250px;
    height: auto; // Adjust height if header/footer is present
    border-right: 2px solid #e5e8eb;
  }
`;

const ProfileSection = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;

  ${mq('md')} {
    display: flex;
    margin-bottom: 20px;
  }
`;

export { Sidebar, ProfileSection };
