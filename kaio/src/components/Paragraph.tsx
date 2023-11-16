import styled from "styled-components";
import { Paragraph } from "../types/content";

type ParagraphProps = {
  data: Paragraph;
};

const TextContainer = styled.div`
  padding: 1.25rem 0;

  p {
    text-align: left;
  }
`;
const Testimonial = styled.p`
  padding: 0 5rem;
`;

const ParagraphContent = ({ data }: ParagraphProps) => {
  return (
    <TextContainer>
      {data.title && (
        <h2>
          <b>{data.title}</b>
        </h2>
      )}
      {data.subtitle && (
        <p>
          <b>{data.subtitle}</b>
        </p>
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
        <p>
          {data.text.map((str, index) => (
            <div key={index}>
              {str} <br />
              <br />
            </div>
          ))}
        </p>
      )}
    </TextContainer>
  );
};

export default ParagraphContent;
