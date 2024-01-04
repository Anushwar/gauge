import styled from '@emotion/styled';
import { mq } from '@helpers/style';

const HamburgerIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #333;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg);
  }
  &.open div:nth-child(2) {
    opacity: 0;
  }
  &.open div:nth-child(3) {
    transform: rotate(-45deg);
  }

  // Media query to display the hamburger icon on mobile devices
  ${mq('md')} {
    display: none;
  }
`;

export default HamburgerIcon;
