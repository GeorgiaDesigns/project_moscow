import styled from "styled-components";
import { useEffect, useState } from "react";

const Header = styled.nav`
  position: fixed;
  display: flex;
  width: 100vw;
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
  cursor: pointer;

  & a {
    color: #f5f5f7;
    text-decoration: none;
    transition: color 0.2s;
  }

  & a:hover {
    color: #fa4a7f;
  }
`;

type LogoProps = {
  showLogo: boolean;
};
const Logo = styled.div<LogoProps>`
  ${({ showLogo }) => showLogo && "display: block"}
  display: none;
  position: fixed;
  color: #fa4a7f;
  font-size: 1.25rem;
  left: 10%;
  cursor: pointer;
`;

type NavProps = {
  headerList: string[];
};

const Nav = ({ headerList }: NavProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("section0");
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
        <Logo onClick={scrollToTop} showLogo={showLogo}>
          <b>Hi, I'm Kaio!</b>
        </Logo>
        <NavList>
          {headerList.map((h, i) => (
            <NavItem key={i}>
              <a key={i} onClick={() => scrollToSection(`#section${i + 1}`)}>
                {h}
              </a>

              {/* <a href={"#section" + (i + 1)}>{h}</a> */}
            </NavItem>
          ))}
        </NavList>
      </Header>
    </>
  );
};

export default Nav;
