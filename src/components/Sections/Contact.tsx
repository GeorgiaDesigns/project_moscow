import styled from "styled-components";
import { Moon } from "../Content/Moon";
import { LinkedIn } from "../Content/LinkedIn";
import { Mail } from "../Content/Mail";
import { Video } from "../Content/Video";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Contact = () => {
  return (
    <Container>
      <Moon />
      <h3 style={{ textAlign: "center" }}>
        Liked my work and have a project in mind?
        <br />
        <span id="pink">Get in touch</span>
      </h3>
      <Links>
        <a href="http://kaio.youcanbook.me/" target="_blank">
          <Video size="small" />
          kaio.youcanbook.me
        </a>
        <a
          href=""
          title={"Copiar e-mail"}
          onClick={() => {
            navigator.clipboard.writeText("kaiohsdias@proton.me");
          }}
        >
          <Mail size="small" />
          kaiohsdias@proton.me
        </a>
        <a href="https://www.linkedin.com/in/kaiohsdias/" target="_blank">
          <LinkedIn size="small" /> linkedin.com/in/kaiohsdias
        </a>
      </Links>
    </Container>
  );
};

export default Contact;
