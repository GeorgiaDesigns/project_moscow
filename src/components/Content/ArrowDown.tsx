import styled, { css } from "styled-components";

type IconProps = {
  color?: string;
  rotated?: boolean;
  size?: "small" | "large";
};

const Wrapper = styled.div<IconProps>`
  ${({ rotated, color, size }) => css`
    size: ${size === "small"
      ? `scale: 0.6;`
      : size === "large"
      ? `scale: 1.5;`
      : "width: 100%;"};
    color: #fa4a7f;
    transition: color 0.5s;

    &:hover {
      color: ${color};
    }
    ${rotated && `transform: rotate(-90deg);`}
  `}
`;

export const ArrowDown = ({ rotated, color, size }: IconProps) => {
  return (
    <Wrapper color={color} size={size} rotated={rotated}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
      >
        <path
          d="M12.5 4.875V19.4583"
          stroke="currentColor"
          stroke-width="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.7923 12.1666L12.5007 19.4583L5.20898 12.1666"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrapper>
  );
};
