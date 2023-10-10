import styled, { css } from "styled-components";

const generateStyles = (numChildren: number) => {
  let styles = "";
  for (let i = 1; i <= numChildren; i++) {
    const left = `${Math.floor(Math.random() * 100 - 11) + 10}%`;
    const top = `${Math.floor(Math.random() * 80 - 10) + 9}%`;
    const size = `${Math.floor(Math.random() * (50 - 10) + 9)}`;
    const animationDelay = `${(i - 1) * 0.5}s`;
    styles += `
      &:nth-child(${i}) {
        left:  ${left};
        top:  ${top};
        animation-delay: ${animationDelay};
        width: min-content;

          width: ${size}px;
      }
    `;
  }
  return css`
    ${styles}
  `;
};

export const Container = styled.div`
  position: relative;
  height: 25vh;
`;

export const Star = styled.svg`
  position: absolute;
  animation: blink 2s infinite;
  ${generateStyles(30)}

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Background = () => {
  const stars = [];
  for (let i = 0; i < 30; i++) {
    const key = `div-${i}`;

    stars.push(
      <Star
        key={key}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 38"
        fill="none"
      >
        <path
          d="M24.5195 19.4122C14.2021 20.396 13.4169 21.4895 12.8105 37.9449C12.8077 38.0169 12.7014 38.0169 12.6991 37.9449C12.0927 21.4895 11.3075 20.396 0.990078 19.4122C0.922578 19.4054 0.922578 19.3075 0.990078 19.3008C11.3075 18.317 12.0927 17.2235 12.6991 0.768111C12.7019 0.696111 12.8082 0.696111 12.8105 0.768111C13.4169 17.2235 14.2021 18.317 24.5195 19.3008C24.587 19.3075 24.587 19.4054 24.5195 19.4122Z"
          fill="#F5F5F7"
        />
      </Star>
    );
  }
  return <Container>{stars}</Container>;
};

export default Background;
