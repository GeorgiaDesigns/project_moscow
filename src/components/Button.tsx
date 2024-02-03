import theme from "../styles/theme";
import styled, { css } from "styled-components";
import { ArrowDown } from "./Content/ArrowDown";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  backgroundColor?: keyof typeof theme.colors;
  filled?: boolean;
  minimal?: boolean;
  rounded?: boolean;
  hasIcon?: boolean;
  iconDirection?: "down" | "side";
  border?: "pill" | "round";
  hover?: keyof typeof theme.colors;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const wrapperModifiers = {
  minimal: (backgroundColor: keyof typeof theme.colors) => css`
    background: none;
    color: ${backgroundColor
      ? theme.colors[backgroundColor]
      : theme.colors.textHighlight};
    box-shadow: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.textHighlight};
    }
  `,
  filled: (backgroundColor: keyof typeof theme.colors) => css`
    background-color: ${theme.colors[backgroundColor]};
    color: ${backgroundColor === "textHighlight"
      ? theme.colors.primaryLight
      : theme.colors.textHighlight};
    border: 0;

    &:hover {
      background-color: ${theme.colors.primaryLight};
      color: ${theme.colors[backgroundColor]};
    }
  `,
  rounded: () => css`
    border-radius: 50%;
    height: 2.35rem;
    width: 2.35rem;

    &:hover {
      svg {
        color: ${theme.colors.primaryDark};
      }
    }
  `,

  withIcon: () => css`
    svg,
    div {
      width: 1rem;
    }
  `,
};

export const ButtonStyle = styled.button<ButtonProps>`
  ${({ backgroundColor, filled, minimal, rounded, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    padding: 0.25rem 1rem;
    min-height: 2.35rem;

    border: 1px solid ${backgroundColor && theme.colors[backgroundColor!]};
    border-radius: 1.6875rem;
    background-color: transparent;
    color: ${backgroundColor === "textHighlight"
      ? theme.colors.textHighlight
      : theme.colors.primaryLight};

    font-family: ${theme.font.family.primary};
    font-size: 0.9rem;
    text-decoration: none;

    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${backgroundColor && theme.colors[backgroundColor!]};
      color: ${backgroundColor === "textHighlight"
        ? theme.colors.primaryLight
        : theme.colors.textHighlight};

      & svg {
        transition: color 0.2s ease-in-out;
        color: ${theme.colors.primaryLight};
      }
    }

    > svg {
      display: ${hasIcon ? "block" : "none"};
    }

    ${!!filled && wrapperModifiers.filled(backgroundColor!)}
    ${!!minimal && wrapperModifiers.minimal(backgroundColor!)}
    ${!!rounded && wrapperModifiers.rounded()}
    ${!!hasIcon && wrapperModifiers.withIcon()}
  `}
`;

const Button = ({
  children,
  hasIcon,
  iconDirection = "down",
  backgroundColor = "textHighlight",
  filled = false,
  minimal = false,
  rounded = false,
  ...props
}: ButtonProps) => (
  <ButtonStyle
    backgroundColor={backgroundColor}
    filled={filled}
    minimal={minimal}
    rounded={rounded}
    hasIcon={hasIcon}
    {...props}
  >
    {children}
    {hasIcon && <ArrowDown rotated={iconDirection === "side"} />}
  </ButtonStyle>
);

export default Button;
