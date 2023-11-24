import styled from "styled-components";
import Testimonials from "../Testimonials";
import { useNavigate } from "react-router-dom";
import { Projects } from "../../data/projects";
import VideoContent from "../VideoContent";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
              >
                <path
                  d="M5.20898 12.167H19.7923"
                  stroke="#FA4A7F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 4.87614L19.7917 12.1678L12.5 19.4595"
                  stroke="#FA4A7F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div style={{ position: "relative", width: "100vw" }}>
            <BackgroundImg src={"./assets/desktop.png"} />
            <Overlay>
              <VideoContent
                data={{
                  path: "./assets/APH - 1.mp4#t=25,30",
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
