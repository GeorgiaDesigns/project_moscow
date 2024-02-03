import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav headerList={["About me", "My work"]} />
      <Outlet />
    </>
  );
};

export default Layout;
