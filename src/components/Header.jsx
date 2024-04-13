import React, { useState, useRef } from "react";
import "../App.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const scrollRef = useRef();

  const scrollToSection = (item) => {
    // Scroll to the corresponding section
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div id="header" style={{ fontFamily: "Montserrat" }}>
      <header className="fixed top-0 z-50 sm:fixed w-screen text-gray-400 bg-teal-800 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex justify-between items-center w-full md:w-auto">
            <a
              href="/"
              className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            >
              <span className="self-center whitespace-nowrap text-3xl font-bold md:ml-10 lg:ml-10 text-white md:mt-2">
                Saakshi's Portfolio
              </span>
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center mb-4 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <nav
            className={`md:ml-auto flex flex-wrap items-center text-base justify-center gap-5 ${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row`}
          >
            <a
              href="/#about" 
              // href="/about"
              className="text-white font-semibold text-xl duration-500 ease-in-out hover:scale-110"
              // onClick={() => scrollToSection("about")}
            >
              About
            </a>
            <a
              href="/#projects" 
              // href="/projects"
              className="text-white font-semibold text-xl duration-500 ease-in-out hover:scale-110"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </a>
            <a
              href="/#experience"
              // href="/experience"
              className="mr-5 text-white font-semibold text-xl duration-500 ease-in-out hover:scale-110"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
