import { TextStyle } from "components/Text/styles";
import styled, { css } from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  padding: 27px 44px;
  
  span {
    font-weight: 600;
  }
`;

export const WrapSvg = styled.div`
  width: fit-content;
`;

export const WrapLinks = styled.nav`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    gap: 65px;
    width: fit-content;
    
    ${TextStyle} {
      display: inline;
    }
    
    @media ${theme.mediaQueries.sm} {
      flex-direction: column;
      gap: 0px;
    }
  `}
`;
