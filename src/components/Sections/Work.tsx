import styled from "styled-components";
import Testimonials from "../Testimonials";
import { useNavigate } from "react-router-dom";
import { Projects } from "../../data/projects";
import VideoContent from "../VideoContent";
import { ArrowDown } from "../Content/ArrowDown";
import Font from "../Typography";

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  padding: 5rem 0;

  &:nth-of-type(odd) {
    flex-direction: row-reverse;
  }

  .text {
    width: 85%;
  }
`;

const Overlay = styled.div`
  > video {
    position: absolute;
    top: 6.5%;
    left: 5%;
    max-width: 92%;
    height: auto;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Work = () => {
  const navigate = useNavigate();
  const redirectToProject = (id: string | number) =>
    navigate("/projects/" + id);

  return (
    <>
      {Projects.map((p) => (
        <TextContainer>
          <div className="text">
            <Font family="bold" size="sm" lineHeight="giant">
              {p.title}
            </Font>

            <Font size="xxsm" lineHeight="giant" color="primaryDark">
              {p.description}
            </Font>

            <button onClick={() => redirectToProject(p.id)}>
              See more
              <ArrowDown color="#f5f5f7" rotated />
            </button>
          </div>
          <div style={{ position: "relative", width: "100vw" }}>
            <BackgroundImg src={"./assets/desktop.png"} />
            <Overlay>
              <VideoContent
                data={{
                  path: p.thumbnail,
                }}
              />
            </Overlay>
          </div>
        </TextContainer>
      ))}
      <div>
        <Font size="sm">What people are saying</Font>
        <Testimonials />
      </div>
    </>
  );
};

export default Work;
