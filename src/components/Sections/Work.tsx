import styled from "styled-components";
import Testimonials from "../Testimonials";
import { useNavigate } from "react-router-dom";
import { Projects } from "../../data/projects";
import VideoContent from "../VideoContent";
import { ArrowDown } from "../Content/ArrowDown";

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 82vw;
  margin: 0 auto;
  gap: 3.75rem;
  padding: 5rem 0;

  &:nth-of-type(odd) {
    flex-direction: row-reverse;
  }

  .text {
    width: 80%;
  }

  .text p {
    font-size: 0.8rem;
    text-align: left;
    padding-top: 0.5rem;
    padding-bottom: 1.75rem;
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

const Review = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Work = () => {
  const navigate = useNavigate();
  const redirectToProject = (id: string | number) =>
    navigate("/projects/" + id);

  return (
    <div>
      {Projects.map((p) => (
        <TextContainer>
          <div className="text">
            <h2>{p.title}</h2>
            <p>{p.description}</p>
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
      <Review>
        <h2>What people are saying</h2>
        <Testimonials />
      </Review>
    </div>
  );
};

export default Work;
