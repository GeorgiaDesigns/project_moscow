import styled, { css } from "styled-components";

type IconProps = {
  color?: string;
  hasOutline?: boolean;
  size?: "small" | "large";
};

const Wrapper = styled.div<IconProps>`
  ${({ color, size }) => css`
    size: ${size === "small"
      ? `scale: 0.6;`
      : size === "large"
      ? `scale: 1.5;`
      : "width: 100%;"};
    color: #f5f5f7;
    transition: color 0.5s;

    &:hover {
      color: ${color};
    }
  `}
`;

export const LinkedIn = ({
  color = "#F5F5F7",
  hasOutline,
  size,
}: IconProps) => {
  return (
    <Wrapper color={color} size={size}>
      {hasOutline ? (
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="27"
            cy="27"
            r="26"
            stroke="currentColor"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3561 16.5066C21.3561 17.8514 20.3322 18.9396 18.731 18.9396C17.1922 18.9396 16.1682 17.8514 16.1999 16.5066C16.1682 15.0965 17.1921 14.04 18.7617 14.04C20.3322 14.04 21.3254 15.0965 21.3561 16.5066ZM16.3287 36.5252V20.8617H21.1967V36.5242H16.3287V36.5252Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0994 25.8606C25.0994 23.9068 25.0351 22.2412 24.9707 20.8638H29.199L29.4238 23.0097H29.5198C30.1605 22.0165 31.7617 20.5123 34.3562 20.5123C37.5586 20.5123 39.9609 22.6264 39.9609 27.237V36.5274H35.0929V27.847C35.0929 25.8279 34.3888 24.4514 32.6272 24.4514C31.2815 24.4514 30.4814 25.3803 30.1615 26.2765C30.0328 26.5973 29.9694 27.0449 29.9694 27.4944V36.5274H25.1014V25.8606H25.0994Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.60308 2.26993C5.60308 3.50794 4.66043 4.50984 3.1863 4.50984C1.7696 4.50984 0.826955 3.50794 0.856127 2.26993C0.826955 0.971746 1.76958 -0.000976562 3.21454 -0.000976562C4.66041 -0.000976562 5.57482 0.971746 5.60308 2.26993ZM0.974646 20.6997V6.27934H5.45629V20.6988H0.974646V20.6997Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.05016 10.8818C9.05016 9.08313 8.9909 7.54974 8.93164 6.28164H12.8244L13.0313 8.25718H13.1197C13.7096 7.3428 15.1837 5.95801 17.5722 5.95801C20.5205 5.95801 22.7322 7.90437 22.7322 12.149V20.702H18.2505V12.7106C18.2505 10.8517 17.6023 9.58453 15.9805 9.58453C14.7416 9.58453 14.005 10.4397 13.7105 11.2647C13.592 11.5601 13.5336 11.9721 13.5336 12.386V20.702H9.05197V10.8818H9.05016Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Wrapper>
  );
};
