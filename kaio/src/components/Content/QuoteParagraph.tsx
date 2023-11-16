import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
`;

type QuoteProps = {
  children: ReactNode;
};

export const QuoteParagraph = ({ children }: QuoteProps) => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="682"
      height="351"
      viewBox="0 0 682 351"
      fill="none"
    >
      <path
        d="M31 1C14.4315 1 1 14.4314 1 31V279C1 295.569 14.4314 309 31 309H541L581 349L621 309H651C667.569 309 681 295.569 681 279V31C681 14.4315 667.569 1 651 1H31Z"
        stroke="#232846"
        stroke-width="2"
      />
      <text x="10" y="30" fill="#232846">
        {children}
      </text>
    </svg>
  </Wrapper>
);
