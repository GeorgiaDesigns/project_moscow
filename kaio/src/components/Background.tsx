import styled, { css } from "styled-components";

const generateStyles = (numChildren: number) => {
  let styles = "";
  for (let i = 1; i <= numChildren; i++) {
    const left = `${Math.floor(Math.random() * 91 - 45) + 50}%`; // Random left position between 20% and 80%
    const bottom = `${Math.floor(Math.random() * 101 - 55) + 50}%`; // Random left position between 20% and 80%
    const animationDelay = `${(i - 1) * 5}s`; // Random animation delay between 0s and 4s
    styles += `
      &:nth-child(${i}) {
        left:  ${left};
        bottom:  ${bottom};
        animation-delay: ${animationDelay};
      }
    `;
  }
  return css`
    ${styles}
  `;
};

export const Box = styled.div`
  width: 100%;
  position: fixed;
  animation: blink 2s infinite;
  ${generateStyles(8)}

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Star = styled.svg`
  position: absolute;
  font-family: "Airnt";
  font-style: normal;
  color: transparent;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #e2e2e2;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition-timing-function: linear;
`;

const Background = () => {
  return (
    <Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="38"
        viewBox="0 0 25 38"
        fill="none"
      >
        <path
          d="M24.5195 19.4122C14.2021 20.396 13.4169 21.4895 12.8105 37.9449C12.8077 38.0169 12.7014 38.0169 12.6991 37.9449C12.0927 21.4895 11.3075 20.396 0.990078 19.4122C0.922578 19.4054 0.922578 19.3075 0.990078 19.3008C11.3075 18.317 12.0927 17.2235 12.6991 0.768111C12.7019 0.696111 12.8082 0.696111 12.8105 0.768111C13.4169 17.2235 14.2021 18.317 24.5195 19.3008C24.587 19.3075 24.587 19.4054 24.5195 19.4122Z"
          fill="#F5F5F7"
        />
      </svg>
    </Box>
  );
};

export default Background;
