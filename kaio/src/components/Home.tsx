import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flowers } from "./Content/Flowers";

const Section = styled.section`
  padding: 3rem;
  min-height: 95vh;
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
  top: 2rem;
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
`;

const Home = () => {
  return (
    <>
      <Section>
        <Intro>
          <h1>
            <b>
              Hi, I am Kaio! <br />
              I’m a product designer.
            </b>
          </h1>
          <h3>
            I design human-centered digital solutions that <br /> inspire and
            empower.
          </h3>
          <ButtonContainer>
            <Link
              to={{ pathname: "http://kaio.youcanbook.me/" }}
              target="_blank"
            >
              Book a call
            </Link>
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
      >
        <h1 style={{ color: "#232846" }}>
          <b>About me</b>
        </h1>
        <p>
          I’ve been dedicating myself to the tech industry for over 7 years.
          During this time, I have acquired coding skills, earned a degree in
          Information Technology, and worked as a support analyst intern.
          However, it is in designing digital solutions that I have truly
          discovered my passion. My professional journey has placed me at the
          forefront of innovation and industry best practices, as I have had the
          privilege of working for over three years with a global technology
          solutions company. During this period, I have collaborated with
          renowned Brazilian brands from diverse sectors, including banking,
          education, cosmetics, and automotive, helping them enhance their
          digital presence.
        </p>
      </Section>
    </>
  );
};

export default Home;
