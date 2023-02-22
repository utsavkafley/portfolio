import React from "react";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="antialiased bg-light font-montserrat min-h-screen relative">
      <header className="py-10 px-20">
        <nav className="flex flex-row justify-between">
          <h1 className="hidden md:block text-4xl font-roboto w-min hover:text-negative transition-colors">
            <Link to="/">UtsavKafley</Link>
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-end md:space-x-8 w-full md:py-0 text-xl text-dark">
            <button className="hover:text-negative">
              <Link to="/about">about</Link>
            </button>
            <button className="hover:text-negative">
              <Link to="/resume">resume</Link>
            </button>
            <button className="hover:text-negative">
              <Link to="/portfolio">portfolio</Link>
            </button>
            <button className="hover:text-negative">
              <Link to="/connect">connect</Link>
            </button>
          </div>
        </nav>
      </header>
      <div className="pb-32">
        <Outlet />
      </div>
      <footer className="absolute bottom-0 w-full">
        <div className="flex flex-col items-center justify-center w-full h-32 bg-dark text-light">
          <p className="text-center">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by <a href="">Utsav Kafley</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Root;
