import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className="w-11/12 mx-auto my-3">
        <section>
          <LatestNews></LatestNews>
        </section>
        <section className="m-5">
          <Navbar></Navbar>
        </section>
      </div>
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
