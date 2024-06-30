import { TextStyle } from "components/Text/styles";
import styled, { css } from "styled-components";

export const FooterStyle = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    
    padding: 24px 44px;
    
    svg {
      width: 20px;
      height: 20px;
      color: ${theme.colors.white};
    }
  `}
`;

export const WrapSvg = styled.div`
  width: fit-content;
`;

export const WrapLinks = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${TextStyle} {
      display: inline;
    }

    width: 80px;
    
    svg {
      display: none;
      transition: color 0.2s ease-in-out;
    }
    
    @media ${theme.mediaQueries.smUp} {
      ${TextStyle} {
        margin-right: 14px;
      }

      &:hover {
        svg {
          transition: color 0.2s ease-in-out;
          display: block;
        }
      }
    }
  `}
`;
