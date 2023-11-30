import { Outlet } from "react-router-dom";
import Background from "./Background";
import Contact from "./Sections/Contact";
import Nav from "./Nav";

const Layout = () => {
  return (
    <>
      <Nav headerList={["About me", "My work"]} />
      <Outlet />
      <div id="footer" style={{ height: "16rem", background: "#232846" }}>
        <Background position="bottom" />
        <Contact />
      </div>
    </>
  );
};

export default Layout;
