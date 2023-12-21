import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Navbar fluid className="bg-teal-800 lg:h-16 md:h-16">
        <Navbar.Brand as={Link} to="/">
          <span className="self-center whitespace-nowrap text-2xl font-bold md:ml-10 lg:ml-10 text-white lg:mt-2 md:mt-2">
            Saakshi's Portfolio
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="ml-auto mr-10">

          <button class="font-bold duration-500 ease-in-out hover:scale-110 active:animate-bounce">
            <Navbar.Link
             as={Link} to="/about"
              className="text-lg font-semibold text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white md:hover:underline lg:hover:underline"
            >
              About
            </Navbar.Link>
          </button>

          <button class="font-bold duration-500 ease-in-out hover:scale-110 active:animate-bounce">
          <Navbar.Link
            as={Link} to="/projects"
            className="text-lg font-semibold text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white md:hover:underline lg:hover:underline"
          >
            Projects
          </Navbar.Link>
          </button>
          
          <button class="font-bold duration-500 ease-in-out hover:scale-110 active:animate-bounce">
          <Navbar.Link
            as={Link} to="/experience"
            className="text-lg font-semibold text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white md:hover:underline lg:hover:underline"
          >
           Experience
          </Navbar.Link>
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
