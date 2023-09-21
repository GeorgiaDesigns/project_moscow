import styled from "styled-components";
import { Flowers } from "./Content/Flowers";
import About from "./Sections/About";
import { LinkedIn } from "./Content/LinkedIn";
import { Mail } from "./Content/Mail";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Quote = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Intro = styled.div`
  left: 6rem;
  top: 4rem;
  width: fit-content;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: #f5f5f7;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & a {
    cursor: pointer;
    text-decoration: none;
  }

  > svg:hover {
    border-color: #fa4a7f;
  }
`;

const BookMe = styled.a`
  background-color: #fa4a7f;
  border-radius: 1.6875rem;
  padding: 0.4rem 1rem;
  color: #f5f5f7;
  height: 2.35rem;
  display: flex;
  align-items: center;
`;

const Footer = styled.section`
  min-height: 25vh;
`;

const Home = () => {
  return (
    <>
      <Section id="introSection">
        <Intro>
          <h1>
            <b>
              <span id="pink">Hi, I am Kaio!</span> <br />
              I’m a product designer.
            </b>
          </h1>
          <h3>
            I design human-centered digital solutions that <br /> inspire and
            empower.
          </h3>
          <ButtonContainer>
            <BookMe href="http://kaio.youcanbook.me/" target="_blank">
              Book a call
            </BookMe>
            <a href="https://www.linkedin.com/in/kaiohsdias/" target="_blank">
              <LinkedIn />
            </a>
            <a
              title={"Copiar e-mail"}
              onClick={() => {
                navigator.clipboard.writeText("kaiohsdias@proton.me");
              }}
            >
              <Mail />
            </a>
          </ButtonContainer>
        </Intro>
      </Section>
      <Section style={{ background: "#F5F5F7", paddingTop: "8rem" }}>
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
          <p>
            We are all in the gutter, <br /> but some of us are looking at the
            stars. <br />
            <br />
            <b>Oscar Wilde</b>
          </p>
        </Quote>
      </Section>
      <Section
        style={{
          background: "#F5F5F7",
          alignItems: "center",
        }}
      >
        <Flowers />
        <button>
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
          >
            <path
              d="M12.5 4.875V19.4583"
              stroke="#FA4A7F"
              stroke-width="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.7923 12.1666L12.5007 19.4583L5.20898 12.1666"
              stroke="#FA4A7F"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Section>
      <Section
        style={{
          background: "#F5F5F7",
          alignItems: "center",
        }}
        id="aboutSection"
      >
        <h1 style={{ color: "#232846" }}>
          <b>About me</b>
        </h1>
        <About />
      </Section>
      <Section
        style={{
          background: "#F5F5F7",
          alignItems: "center",
        }}
        id="workSection"
      >
        <h1 style={{ color: "#232846" }}>
          <b>My work</b>
        </h1>
        <Work />
      </Section>
      <Footer id="footer">
        <Contact />
      </Footer>
    </>
  );
};

export default Home;
