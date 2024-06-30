import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
    height: 100%;
    width: fit-content;
    gap: 7px;

    span {
      font-weight: 400;
    }

    span:nth-child(1) {
      font-weight: 700;
    }
    span:nth-child(3) {
      color: ${theme.colors.yellow};
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 12px;

    @media ${theme.mediaQueries.sm} {
      flex-direction: column;
    }
  `}  
`