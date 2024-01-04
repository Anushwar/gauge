import styled from '@emotion/styled';
import { mq } from '@helpers/style';

const Heading = styled.h1`
  font-size: 1rem; // Default font size for mobile view

  ${mq('md')} {
    font-size: 1rem; // Font size for screens >= 768px
  }

  ${mq('lg')} {
    font-size: 1.25rem; // Font size for screens >= 992px
  }

  ${mq('xl')} {
    font-size: 1.5rem; // Font size for screens >= 1200px
  }
`;

export default Heading;
