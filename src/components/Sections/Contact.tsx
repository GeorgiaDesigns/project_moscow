import styled from "styled-components";
import { Moon } from "../Content/Moon";
import { LinkedIn } from "../Content/LinkedIn";
import { Mail } from "../Content/Mail";
import { Video } from "../Content/Video";
import Font from "../Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
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
      <Font size="sm" align="center" color="primaryLight">
        Liked my work and have a project in mind?
        <br />
        <span id="pink">Get in touch</span>
      </Font>

      <Links>
        <Font size="xxsm" color="primaryLight">
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
        </Font>
      </Links>
    </Container>
  );
};

export default Contact;
