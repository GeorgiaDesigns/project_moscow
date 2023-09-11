import { Outlet, Link } from "react-router-dom";
import { Gutter } from "./Content/gutter";
import styled from "styled-components";

const Header = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  height: 6.625rem;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 0;
  top: 0;
`;

const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/">Kaio</Link>
        <Link to="/about">About me</Link>
        <Link to="/work">My work</Link>
      </Header>

      <Gutter />

      <Outlet />
    </>
  );
};

export default Layout;
