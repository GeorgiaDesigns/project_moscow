import styled from "styled-components";
import { Moon } from "../Content/Moon";
import { LinkedIn } from "../Content/LinkedIn";
import { Mail } from "../Content/Mail";
import { Video } from "../Content/Video";
import Font from "../Typography";
import Background from "../Background";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  & a {
    display: flex;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
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

      <Font size="xxsm" color="primaryLight">
        <Links>
          <a href="http://kaio.youcanbook.me/" target="_blank">
            <Video />
            kaio.youcanbook.me
          </a>
          <a
            title={"Copiar e-mail"}
            onClick={() => {
              navigator.clipboard.writeText("kaiohsdias@proton.me");
              toast.success("🦄 E-mail copied!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
              });
            }}
          >
            <Mail />
            kaiohsdias@proton.me
          </a>
          <a href="https://www.linkedin.com/in/kaiohsdias/" target="_blank">
            <LinkedIn /> linkedin.com/in/kaiohsdias
          </a>
        </Links>
      </Font>
      <Background position="bottom" />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Contact;
