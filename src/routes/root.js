import React from "react";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="antialiased bg-light font-montserrat">
      <header className="py-10">
        <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-end md:space-x-8 w-full py-4 md:py-0 px-10 text-xl text-dark">
          <button>
            <Link to="/about">about</Link>
          </button>
          <button>
            <Link to="/resume">resume</Link>
          </button>
          <button>
            <Link to="/portfolio">portfolio</Link>
          </button>
          <button>
            <Link to="/connect">connect</Link>
          </button>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
