import styled, { css } from "styled-components";

type IconProps = {
  hasOutline?: boolean;
  size?: "small" | "large";
};

const Wrapper = styled.div<IconProps>`
  ${({ size }) => css`
    ${size === "small"
      ? `scale: 0.6;`
      : size === "large"
      ? `scale: 1.5;`
      : "scale: 0.8;"}
    display: flex;
  `}
`;

export const LinkedIn = ({ size }: IconProps) => {
  return (
    <Wrapper size={size}>
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
    </Wrapper>
  );
};
