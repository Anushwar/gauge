import styled from '@emotion/styled';
import { mq } from '@helpers/style';

// Styled component for a card
const Card = styled.div<{ bgColor: string; borderColor?: string }>`
  background-color: ${(props) => props.bgColor};
  border: 1px solid #e5e8eb;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;

  ${mq('md')} {
    flex: 1;
  }
`;

export default Card;
