import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../components/footer/Footer";
import Navbar from "./../components/header/Navbar";

export const DetailsLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="container">
          <div className="grid gap grid-cols-12">
            <article className="col-span-9">
              <Outlet />
            </article>
            <aside className="col-span-3">
              <div className="bg-car-secondary min-h-screen">ads</div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
