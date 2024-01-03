import styled from '@emotion/styled';
import { mq } from '@helpers/style';

const Menu = styled.nav<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;

  ${mq('md')} {
    display: flex;
  }
`;

const MenuItem = styled.a`
  padding: 10px 15px;
  margin: 5px 0px;
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &.active {
    background-color: #e5e8eb;
  }

  svg {
    margin-right: 10px;
  }
`;

export { Menu, MenuItem };
