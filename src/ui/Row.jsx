import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  ${({ type }) => {
    if (type === 'horizontal') {
      return css`
        justify-content: space-between;
        align-items: center;
      `;
    }
    if (type === 'vertical') {
      return css`
        flex-direction: column;
        gap: 1.6rem;
      `;
    }
  }}
`;

Row.defaultProps = {
  type: 'vertical',
};

export default Row;
