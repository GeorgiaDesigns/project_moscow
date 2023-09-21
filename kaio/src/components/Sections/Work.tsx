import styled from "styled-components";
import InfoContainer from "../InfoContainer";

const Banner = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Work = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <Banner>
        <h3>Worked with</h3>
        <img src="src/assets/work-banner.png" alt="Image" />
      </Banner>
      <InfoContainer
        text={
          <>
            <p>
              The Academic Planning team was responsible for designing the
              course offerings and managing the availability of seats for each
              undergraduate program in the upcoming semester. However, the
              existing process relied heavily on manual Excel spreadsheets for
              planning and a legacy system for seat allocation, leading to
              various challenges and inefficiencies.
            </p>
          </>
        }
        imageUrl="src/assets/project-2.svg"
        isTextOnLeft={false}
      />
      <InfoContainer
        text={
          <>
            <p>
              The Academic Planning team was responsible for designing the
              course offerings and managing the availability of seats for each
              undergraduate program in the upcoming semester. However, the
              existing process relied heavily on manual Excel spreadsheets for
              planning and a legacy system for seat allocation, leading to
              various challenges and inefficiencies.
            </p>
          </>
        }
        imageUrl="src/assets/project-2.svg"
        isTextOnLeft={true}
      />
    </div>
  );
};

export default Work;
