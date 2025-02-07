import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const RootsLayouts = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootsLayouts;
