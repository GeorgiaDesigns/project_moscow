import { ReactNode } from "react";
import theme from "../styles/theme";
import styled, { css } from "styled-components";

export type TypographyProps = {
  children: ReactNode;
  family?: keyof typeof theme.font.family;
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.font.sizes;
  align?: "left" | "center" | "right";
  lineHeight?: keyof typeof theme.font.lineHeights;
  fontWeight?: 300 | 400 | 500 | 600 | 700;
  textTransform?: "none" | "uppercase" | "capitalize";
  tooltip?: string;
};

export const Typography = styled("p")<TypographyProps>`
  ${({
    family,
    color,
    size,
    align,
    lineHeight,
    fontWeight,
    textTransform,
  }) => css`
    display: block;
    font-family: ${theme.font.family[family ?? "primary"]};
    font-size: ${theme.font.sizes[size ?? "xsm"]};
    font-weight: ${fontWeight};
    text-align: ${align};
    line-height: ${theme.font.lineHeights[lineHeight ?? "medium"]};
    color: ${theme.colors[color ?? "primaryDark"]};
    text-transform: ${textTransform};
  `}
`;

const Font: React.FC<TypographyProps> = ({
  children,
  family,
  color,
  size,
  align = "left",
  lineHeight,
  fontWeight = 400,
  textTransform = "none",
  tooltip,
  ...props
}: TypographyProps) => (
  <Typography
    family={family}
    color={color}
    size={size}
    align={align}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    textTransform={textTransform}
    {...props}
  >
    {tooltip && <div>{tooltip}</div>}
    {children}
  </Typography>
);

export default Font;
