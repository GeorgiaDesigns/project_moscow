import styled from "styled-components";
import { Moon } from "../Content/Moon";
import { LinkedIn } from "../Content/LinkedIn";
import { Mail } from "../Content/Mail";
import { Video } from "../Content/Video";
import Font from "../Typography";
import Background from "../Background";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 15;
  height: 19rem;
  justify-content: center;

  position: absolute;
  width: 100%;
  background: #232846;
`;

const Links = styled.div``;

const Contact = () => {
  return (
    <Container>
      <Moon />
      <Font size="sm" align="center" color="primaryLight">
        Liked my work and have a project in mind?
        <br />
        <span id="pink">Get in touch</span>
      </Font>

      <Links>
        <Font size="xxsm" color="primaryLight">
          <a href="http://kaio.youcanbook.me/" target="_blank">
            <Video />
            kaio.youcanbook.me
          </a>
          <a
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
        </Font>
      </Links>
      <Background position="bottom" />
    </Container>
  );
};

export default Contact;
