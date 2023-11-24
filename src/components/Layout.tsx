import { Outlet } from "react-router-dom";
import Background from "./Background";
import Contact from "./Sections/Contact";

const Layout = () => {
  return (
    <>
      {/* <Header>
        {showLogo && (
          <Logo onClick={scrollToTop}>
            <b>Kaio</b>
          </Logo>
        )}
        <NavList>
          <NavItem>
            <a href="#aboutSection">About me</a>
          </NavItem>
          <NavItem className="nav-item">
            <a href="#workSection">My work</a>
          </NavItem>
        </NavList>
      </Header> */}
      <Outlet />
      <div id="footer" style={{ height: "16rem" }}>
        <Background position="bottom" />
        <Contact />
      </div>
    </>
  );
};

export default Layout;
