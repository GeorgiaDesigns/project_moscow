import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { Gutter } from "./Content/Gutter";

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

const Layout = () => {
  return (
    <>
      <Header>
        {/* <Link to="/">Kaio</Link> */}
        <Link to="/about">About me</Link>
        <Link to="/work">My work</Link>
      </Header>

      <Gutter />

      <Outlet />
    </>
  );
};

export default Layout;
