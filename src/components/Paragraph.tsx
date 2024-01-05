import styled from "styled-components";
import { Paragraph } from "../types/content";
import Font from "./Typography";

type ParagraphProps = {
  data: Paragraph;
};

const TextContainer = styled.div`
  padding: 1.25rem 0;

  p {
    text-align: left;
  }
`;
const Testimonial = styled(Font)`
  padding: 0 5rem;
`;

const ParagraphContent = ({ data }: ParagraphProps) => {
  return (
    <TextContainer>
      {data.title && (
        <Font family="bold" size="sm">
          {data.title}
        </Font>
      )}
      {data.subtitle && (
        <Font family="bold" size="xxsm">
          {data.subtitle}
        </Font>
      )}
      {data.testimonial ? (
        <Testimonial>
          {data.text.map((str, index) => (
            <div key={index}>
              {str} <br />
              <br />
            </div>
          ))}
        </Testimonial>
      ) : (
        <Font size="xxsm" lineHeight="giant">
          {data.text.map((str, index) => (
            <div key={index}>
              {str} <br />
              <br />
            </div>
          ))}
        </Font>
      )}
    </TextContainer>
  );
};

export default ParagraphContent;
