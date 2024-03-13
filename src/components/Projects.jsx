import React from "react";
import Jiffy from "../assets/jiffy.png";
import Newsmon from "../assets/newsmon.png";
import Catalysis from "../assets/catalysis.png";
import SmartSpend from "../assets/smartspend.png";


function Projects() {
  return (
    <div id="projects" className="bg-white bg-cover lg:h-screen md:h-screen">
      
      <section
        className="text-gray-600 body-font"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="container px-5 py-10 mx-auto">
          <h1
            className="sm:text-3xl text-3xl text-teal-800 font-bold title-font mb-12 mt-5 text-gray-900 items-center text-center justify-center"
            style={{ fontSize: "2.5em", fontWeight: "730" }}
          >
            PROJECTS
          </h1>
          <div className="flex flex-wrap -m-4 p-4">
            <div className="xl:w-1/4 md:w-1/2 p-4 duration-500 ease-in-out hover:scale-105">
              <a href="https://github.com/Saakshi-Shenoy/NewsMon">
                <div className="bg-teal-800 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={Newsmon}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-xs font-bold title-font mb-2 text-white">
                    FRONTEND
                  </h3>
                  <h2 className="text-lg text-white font-bold title-font mb-3">
                    NEWSMON
                  </h2>
                  <p
                    className="leading-relaxed text-sm text-white"
                    style={{ fontSize: "0.9em" }}
                  >
                    A fully responsive website that provides timely coverage and
                    other information about important events around the globe
                    through the usage of APIs.
                  </p>
                </div>
              </a>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4 duration-500 ease-in-out hover:scale-105">
              <a href="https://github.com/Saakshi-Shenoy/FoodApp">
                <div className="bg-teal-800 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={Jiffy}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-500 text-xs font-bold title-font mb-2 text-white">
                    MERN STACK
                  </h3>
                  <h2 className="text-lg text-white font-bold title-font mb-3">
                    JIFFY
                  </h2>
                  <p
                    className="leading-relaxed text-base text-white"
                    style={{ fontSize: "0.9em" }}
                  >
                    A responsive and robust food ordering and delivery website
                    designed to streamline and expedite the food delivery
                    process.
                  </p>
                </div>
              </a>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 duration-500 ease-in-out hover:scale-105">
              <a href="https://github.com/Saakshi-Shenoy/SmartSpend">
                <div className="bg-teal-800 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={SmartSpend}
                    alt="content"
                  />
                  <h3 className="tracking-widest mb-2 text-xs font-bold title-font text-white">
                    FERN STACK
                  </h3>
                  <h2 className="text-lg font-bold title-font mb-3 text-white">
                    SMARTSPEND
                  </h2>
                  <p
                    className="leading-relaxed text-base text-white"
                    style={{ fontSize: "0.9em" }}
                  >
                    An expense tracking website that includes the features of
                    budget management, financial insights, peer-to-peer lending
                    and reminders.
                  </p>
                </div>
              </a>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 duration-500 ease-in-out hover:scale-105">
              <a href="https://github.com/Saakshi-Shenoy/Catalysis2.0">
                <div className="bg-teal-800 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={Catalysis}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-xs font-bold title-font mb-2 text-white">
                    MERN STACK
                  </h3>
                  <h2 className="text-lg text-white font-bold title-font mb-3">
                    CATALYSIS v2.0
                  </h2>
                  <p
                    className="leading-relaxed text-base text-white"
                    style={{ fontSize: "0.9em" }}
                  >
                    Contribution to a college event website for a Technical fest
                    that provides details regarding the events and facilitates
                    the feature of registration to the events.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
