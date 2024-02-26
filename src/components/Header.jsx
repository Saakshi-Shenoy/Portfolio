import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {

  // const handleNavItemClick = (itemName) => {
  //   const element = document.getElementById(itemName);
  //   if(element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Navbar fluid className="bg-teal-800 lg:h-20 md:h-20 pt-4">
        <Navbar.Brand as={Link} to="/">
          <span className="self-center whitespace-nowrap text-3xl font-bold md:ml-10 lg:ml-10 text-white lg:mt-2 md:mt-2">
            Saakshi's Portfolio
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="ml-auto mr-10">
          <button className="font-bold duration-500 ease-in-out hover:scale-110">
            <Navbar.Link
              as={Link}
              to="/about"
              className="text-xl font-semibold text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white focus:underline mb-1"
              // onClick={() => handleNavItemClick("about")}
            >
              About
            </Navbar.Link>
          </button>

          <button className="font-bold duration-500 ease-in-out hover:scale-110">
            <Navbar.Link
              as={Link}
              to="/projects"
              className="text-xl font-semibold text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white focus:underline mb-1"
              // onClick={() => handleNavItemClick("projects")}
            >
              Projects
            </Navbar.Link>
          </button>

          <button className="font-bold duration-500 ease-in-out hover:scale-110">
            <Navbar.Link
              as={Link}
              to="/experience"
              className="text-xl font-semibold text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white focus:underline mb-1"
              // onClick={() => handleNavItemClick("experience")}
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

