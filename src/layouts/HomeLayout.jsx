import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import RightAside from "../Components/HomeLayout/RightAside";
import LeftAside from "../Components/HomeLayout/LeftAside";

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
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
