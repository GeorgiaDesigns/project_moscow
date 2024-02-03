import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { Projects } from "../data/projects";
import {
  ContentType,
  Image,
  Paragraph,
  Project,
  Video,
} from "../types/content";
import ImageContent from "./ImageContent";
import ParagraphContent from "./Paragraph";
import VideoContent from "./VideoContent";
import ImageGallery from "./ImageGallery";
import Font from "./Typography";
import Contact from "./Sections/Contact";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 13rem;
  background: #232846;

  svg {
    margin-top: auto;
  }
`;

const GridContainer = styled.div`
  max-width: 73%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 16.57%);
  justify-content: space-between;
`;

type GridItemProps = {
  isText: boolean;
};

const GridItem = styled.div<GridItemProps>`
  ${({ isText }) =>
    isText
      ? css`
          grid-column: 2/5;
        `
      : css`
          grid-column: span 5;
        `}

  > * {
    max-width: 100%;
  }
`;

function ProjectDetail() {
  const { id } = useParams();
  const project: Project | undefined = Projects.find((p) => p.id == id);
  // const headers = project?.content.forEach((content) => {
  //   if (content.type !== ContentType.PARAGRAPH) {

  //     headers.push(content.data.title?);
  //   }
  // });

  return (
    <>
      {/* <Nav headerList={headers} /> */}
      <Header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="127"
          viewBox="0 0 1920 127"
          fill="none"
        >
          <path d="M1920 0.5V127H0V125.964L1920 0.5Z" fill="#F5F5F7" />
        </svg>
      </Header>
      <GridContainer>
        <GridItem isText={false}>
          <Font family="bold" size="lg" align="center">
            {project?.title}
          </Font>
        </GridItem>
        {project?.content.map((p, i) => (
          <GridItem
            key={i}
            id={`section${i}`}
            isText={p.type === ContentType.PARAGRAPH}
          >
            {
              {
                [ContentType.VIDEO]: <VideoContent data={p.data as Video} />,
                [ContentType.IMAGE]: <ImageContent data={p.data as Image} />,
                [ContentType.GALLERY]: (
                  <ImageGallery content={p.data as Image[]} />
                ),
                [ContentType.PARAGRAPH]: (
                  <ParagraphContent data={p.data as Paragraph} />
                ),
              }[p.type]
            }
          </GridItem>
        ))}
      </GridContainer>
      <Contact />
    </>
  );
}

export default ProjectDetail;
