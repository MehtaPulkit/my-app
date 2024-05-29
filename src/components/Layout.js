import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "./Footer";
import Switcher from "../utils/Switcher";
import Header from "./Header";
const Layout = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 dark:bg-zinc-800 dark:text-white">
      <Header/> 
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
