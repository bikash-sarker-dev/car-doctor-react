import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import { AuthContext } from "../ContextApi";

const RootsLayouts = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <h1 className="text-3xl text-car-review">Loading............</h1>;
  }
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
