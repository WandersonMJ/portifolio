import styled, { css } from "styled-components";

import { fontTypes, themeColors } from "../../styles/theme";

interface IText {
  color: keyof typeof themeColors;
  bold: boolean;
  textAlign: "left" | "center" | "right" | "unset";
  type: keyof typeof fontTypes;
  uppercase?: boolean;
  border?: boolean;
}
export const TextStyle = styled.span<IText>`
  ${({theme, textAlign, bold, uppercase, type, color, border}) => css`
    display: block; 
    color: ${theme.colors[color]};
    text-align: ${textAlign};
    font-weight: ${bold ? "900" : ""};
    text-transform: ${uppercase ? "uppercase" : ""};

    ${theme.fontTypes[type] || theme.fontTypes.body}

    ${border && css`
      width: fit-content;
      border-bottom: 1px solid ${theme.colors[color]};
    `}
  `}
`;
