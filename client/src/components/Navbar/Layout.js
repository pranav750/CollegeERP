import { Fragment } from "react";
import { useLocation } from "react-router";
import Navbar from "./Navbar";

const Layout = (props) => {
  const location = useLocation();

  const homePage =
    location.pathname === "/" ||
    location.pathname === "/student/register" ||
    location.pathname === "/teacher/register" ||
    location.pathname === "/admin/register";

  return (
    <Fragment>
      {!homePage && <Navbar />}
      {props.children}
    </Fragment>
  );
};

export default Layout;
