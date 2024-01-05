import { ReactNode } from "react";
import theme from "../styles/theme";
import styled, { css } from "styled-components";

export type ButtonProps = {
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

export const Button = styled("p")<ButtonProps>`
  ${({
    family,
    color,
    size,
    align,
    lineHeight,
    fontWeight,
    textTransform,
  }) => css`
    border-radius: 1.6875rem;
    border: 2px solid #fa4a7f;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.25s;
    color: #fa4a7f;
    display: flex;
    align-items: center;
    gap: 0.375rem;

    &:svg {
      transform: scale(0.75);
    }

    &:hover div {
      color: #f5f5f7;
    }

    &:hover {
      color: #f5f5f7;
      background-color: #fa4a7f;
    }

    font-family: ${theme.font.family[family ?? "primary"]};
    font-size: ${theme.font.sizes[size ?? "xsm"]};
    font-weight: ${fontWeight};
    text-align: ${align};
    line-height: ${theme.font.lineHeights[lineHeight ?? "medium"]};
    color: ${theme.colors[color ?? "primaryDark"]};
    text-transform: ${textTransform};
  `}
`;

const Font: React.FC<ButtonProps> = ({
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
}: ButtonProps) => (
  <Button
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
  </Button>
);

export default Font;
