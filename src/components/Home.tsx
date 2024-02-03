import styled from "styled-components";
import { Flowers } from "./Content/Flowers";
import About from "./Sections/About";
import { LinkedIn } from "./Content/LinkedIn";
import { Mail } from "./Content/Mail";
import Work from "./Sections/Work";
import { Gutter } from "./Content/Gutter";
import Font from "./Typography";
import Background from "./Background";
import Contact from "./Sections/Contact";
import Button from "./Button";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 12.08%);
  gap: 3.125%;
  justify-content: center;
`;

const Section = styled.section`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Quote = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Fundo = styled.div`
  width: 100%;
  position: absolute;
  background: #232846;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 5rem;
`;

const Intro = styled.div`
  z-index: 5;
  padding-top: 8rem;

  min-height: 80vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  // & a {
  //   cursor: pointer;
  //   text-decoration: none;
  // }

  // & svg {
  //   scale: 0.8;
  // }
`;

// const BookMe = styled.a`
//   background-color: #fa4a7f;
//   border-radius: 1.6875rem;
//   padding: 0.4rem 1rem;
//   color: #f5f5f7;
//
//   display: flex;
//   align-items: center;
//   transition: background-color 0.2s;
//   margin-right: 0.5rem;

//   &:hover {
//     background-color: #f5f5f7;
//     color: #fa4a7f;
//   }
// `;

const Home = () => {
  return (
    <Grid>
      <Fundo>
        <Gutter />
      </Fundo>

      <Section id="section0">
        <Intro>
          <Font family="bold" size="lg" color="primaryLight">
            <span id="pink">Hi, I am Kaio!</span> <br />
            I’m a product designer.
          </Font>

          <Font size="sm" color="primaryLight">
            I design human-centered digital solutions that <br /> inspire and
            empower.
          </Font>

          <ButtonContainer>
            <Button
              filled
              onClick={() =>
                window.open("http://kaio.youcanbook.me/", "_blank")
              }
            >
              Book a call
            </Button>
            <Button
              rounded
              title={"Copiar e-mail"}
              backgroundColor="primaryLight"
              onClick={() => {
                navigator.clipboard.writeText("kaiohsdias@proton.me");
              }}
            >
              <Mail size="small" />
            </Button>

            <Button
              rounded
              backgroundColor="primaryLight"
              onClick={() =>
                window.open("https://www.linkedin.com/in/kaiohsdias/", "_blank")
              }
            >
              <LinkedIn size="small" />
            </Button>
          </ButtonContainer>
        </Intro>
      </Section>
      <Section>
        <Quote>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="56"
            viewBox="0 0 78 56"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78 39.1694V22.3388H69.6973C65.1308 22.3388 61.3945 22.3042 61.3945 22.2618C61.3945 22.2196 63.8625 17.228 66.8789 11.1694C69.8953 5.11084 72.3633 0.11919 72.3633 0.0769615C72.3633 0.0345764 68.6272 0 64.0607 0H55.7583L50.1974 11.1689L44.6367 22.338L44.6367 39.1689V56L61.3184 56H78V39.1694ZM33.3633 39.1694L33.3633 22.3388H25.0604H16.7574L22.3184 11.1694L27.8794 0H19.5005H11.1216L5.5607 11.1689L0 22.338V39.1689V56H16.6816H33.3633V39.1694Z"
              fill="#FA4A7F"
            />
          </svg>
          <div>
            <Font size="sm" align="center">
              We are all in the gutter, <br /> but some of us are looking at the
              stars.
            </Font>
            <Font family="bold" size="sm" align="center">
              Oscar Wilde
            </Font>
          </div>
        </Quote>
      </Section>
      <Section
        style={{
          alignItems: "center",
        }}
      >
        <Flowers />
        <a href="/assets/Resume.pdf" download="Resume_KaioDias.pdf">
          <Button hasIcon>Resume</Button>
        </a>
      </Section>
      <Section id="section1">
        <Font family="bold" size="lg" align="center">
          About me
        </Font>
        <About />
      </Section>
      <Section id="section2">
        <Font family="bold" size="lg" align="center">
          My work
        </Font>
        <Work />
      </Section>
      <Section
        id="footer"
        style={{ height: "19rem", flexDirection: "initial" }}
      >
        <Contact />
        <Background position="bottom" />
      </Section>
    </Grid>
  );
};

export default Home;
