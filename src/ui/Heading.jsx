import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${({ as }) => {
    if (as === 'h1') {
      return css`
        font-size: 30px;
        font-weight: 600;
      `;
    }
    if (as === 'h2') {
      return css`
        font-size: 24px;
        font-weight: 600;
      `;
    }
    if (as === 'h3') {
      return css`
        font-size: 20px;
        font-weight: 600;
      `;
    }
    if (as === 'h4') {
      return css`
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
      `;
    }
  }}
`;

export default Heading;
