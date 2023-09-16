import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Gutter } from "./Content/Gutter";
import { useEffect, useState } from "react";

const Header = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  height: 6.625rem;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  z-index: 200;
  top: 0;
  color: #f5f5f7;

  background: linear-gradient(180deg, #232846 0%, rgba(35, 40, 70, 0) 100%);
  backdrop-filter: blur(2px);
`;

const NavList = styled.ul`
  list-style: none;
  display: contents;
`;

const NavItem = styled.li`
  font-size: 0.8rem;

  & a {
    color: #f5f5f7;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  color: #fa4a7f;
  font-size: 1.25rem;
`;

const Layout = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("introSection");
      if (firstSection) {
        const scrolledBelowFirstSection =
          window.scrollY > firstSection.clientHeight;
        setShowLogo(scrolledBelowFirstSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header>
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
      </Header>

      <Gutter />

      <Outlet />
    </>
  );
};

export default Layout;
