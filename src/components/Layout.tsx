import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <>
      <Nav headerList={["About me", "My work"]} />
      <Outlet />
    </>
  );
};

export default Layout;
