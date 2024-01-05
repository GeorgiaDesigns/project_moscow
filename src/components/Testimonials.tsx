import styled, { css } from "styled-components";
import { Man } from "./Content/Man";
import { Woman } from "./Content/Woman";
import { Quotes } from "./Content/Quotes";
import { useState } from "react";

type TestimonialProps = {
  left: number;
};

// const SpeechBubble = styled.div<TextContainerProps>`
//   display: flex;
//   align-items: flex-start;
//   gap: 7rem;
//   padding: 0 7rem;
// `;

const Testimonial = styled.div<TestimonialProps>`
  ${({ left }) =>
    css`
      left: -${left * 70}vw;
    `}
  transition: left 1s;
  display: flex;
  position: relative;
  width: 145vw;
  justify-content: space-around;
  & img {
    object-fit: contain;
    width: 48rem;
  }
`;

type IndicatorProps = {
  active: boolean;
};

const Indicator = styled.button<IndicatorProps>`
  ${({ active }) =>
    active &&
    css`
      background-color: #fa4a7f;
    `}

  border-radius: 50%;
  border-color: #fa4a7f;
  height: 1.2rem;
  width: 1.2rem;
`;

const IndicatorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 5rem;
  gap: 1rem;
`;

type Quotes = {
  id: number;
  name: string;
  position: string;
  quote: string;
  url?: string;
  svg: JSX.Element;
  active: boolean;
};

const quotes: Quotes[] = [
  {
    id: 0,
    name: "Marcio Kikuti",
    position: "Digital Product Manager at CI&T",
    quote:
      "I strongly endorse Kaio. His passion for creating enlightening user interfaces for innovative digital solutions, contributing to embracing, enhancing, and adapting the corporate's design systems, and rapidly adapting to team dynamics, has significantly impacted our development squad's results... See full review",
    svg: <Man />,
    active: true,
  },
  {
    id: 1,
    name: "Camila Gerarde",
    position: "Full-stack Developer at CI&T",
    quote:
      "Kaio is a very dedicated professional who brings a lot of quality to the team. During the period I worked with him, he brought provocations about the importance of user research to understand their pains and needs and also about following the company's design standards. It cetainly changed my view on these items... See full review",
    svg: <Woman />,
    active: false,
  },
];

const Testimonials = () => {
  const [left, setLeft] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setLeft(1);
  //   }, 3000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Testimonial left={left}>
        <img src="./assets/testimonial-1.png" />
        <img src="./assets/testimonial-2.png" />
        {/* <SpeechBubble>
          <Quotes />
          <QuoteParagraph>{activeQuote?.quote}</QuoteParagraph>
        </SpeechBubble>
        {activeQuote?.svg}
        {activeQuote?.name} */}
      </Testimonial>
      <IndicatorBox>
        {quotes.map((q) => (
          <Indicator
            active={left === q.id}
            id={q.id.toString()}
            onClick={() => setLeft(q.id)}
          />
        ))}
      </IndicatorBox>
    </div>
  );
};

export default Testimonials;
