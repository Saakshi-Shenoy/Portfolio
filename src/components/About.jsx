import React, {useEffect} from "react";
import { BsDownload } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import ME from "../assets/me.jpeg";
import Header from "./Header";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";
import { SiExpress, SiMysql } from "react-icons/si";
import "../App.css";

function About(props) {

  useEffect(() => {
    Aos.init({ duration: 1300 });
  });

  const emailAddress = "shenoy.saakshi910@gmail.com";
  // https://drive.usercontent.google.com/u/0/uc?id=1XoNPwjyvRQD14Dx5TJ6likl9J_RJV7ka&export=download  --> for direct download w/o viewing;

  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1XoNPwjyvRQD14Dx5TJ6likl9J_RJV7ka/view?export=download";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "SaakshiShenoy_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about" className="pt-20 ">
      <Header />
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-3 mt-2 flex flex-row">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-5">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-7" data-aos="fade-in">
                <div className="rounded-full inline-flex items-center justify-center text-gray-400">
                  <img
                    src={ME}
                    className="mb-3 rounded-full image-dimensions"
                    alt="Saakshi Shenoy"
                  />
                </div>
                <div
                  className="flex flex-col items-center text-center justify-center"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <h2
                    className="title-font font-bold mt-2 text-gray-900 text-2xl pb-2"
                    style={{ fontSize: "1.6em" }}
                  >
                    SAAKSHI SHENOY
                  </h2>
                  <div className="w-20 h-1 bg-teal-500 rounded mt-2 mb-4"></div>
                  <span className="text-sm text-gray-600 pb-5">
                    MERN-Stack Web Developer | C | C++ Programmer
                  </span>
                  <div className="w-full">
                    <div className="justify-center items-center">
                      <div className="flex space-x-6 justify-center items-center">
                        <a
                          href="https://www.linkedin.com/in/saakshi-shenoy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="duration-500 ease-in-out hover:scale-110"
                        >
                          <BsLinkedin
                            style={{ color: "teal", fontSize: "24px" }}
                          />
                        </a>
                        <a
                          href={`mailto:${emailAddress}`}
                          className="duration-500 ease-in-out hover:scale-110"
                        >
                          <IoMdMail
                            style={{ color: "teal", fontSize: "26px" }}
                          />
                        </a>
                        <a
                          href="https://github.com/Saakshi-Shenoy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="duration-500 ease-in-out hover:scale-110"
                        >
                          <BsGithub
                            style={{ color: "teal", fontSize: "24px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left" data-aos="fade-in">
                <h1
                  className="title-font sm:text-3xl mb-4 font-bold text-teal-800 pb-3"
                  style={{ fontSize: "4.5em", fontFamily: "Montserrat" }}
                >
                  Hello!<br className="hidden lg:inline-block"></br>
                </h1>
                <p
                  className="leading-relaxed text-md mb-5 mt-5"
                  style={{ fontFamily: "Montserrat", fontSize: "1.05em" }}
                >
                  Welcome to my portfolio! I'm a
                  dedicated developer with proficiency in the MERN stack, C, and
                  C++. I've honed my skills in crafting dynamic web applications
                  using MongoDB, Express.js, React, and Node.js. Recently, I've
                  ventured into the captivating realm of machine learning,
                  driven by a keen interest in exploring its diverse
                  applications. My commitment to perpetual learning fuels my
                  journey, and I'm excited about the endless possibilities that
                  machine learning presents. As I delve into the world of
                  machine learning, I am eager to apply my programming skills to
                  create intelligent and innovative solutions.
                </p>
                <div
                  className="flex items-center justify-center sm:justify-start pt-1"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <button
                    className="cursor-pointer transition-all bg-teal-700 text-white px-6 py-2 rounded-lg border-teal-500
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                    onClick={handleDownload}
                  >
                    <div className="flex items-center">
                      <BsDownload className="mr-2 font-semibold" />
                      <span className="font-medium">Resume</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center pb-5 skills-spacing" data-aos="fade-up" data-aos-duration="1300">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9 gap-2">
          <div className="tech-icons">
            <CgCPlusPlus className="w-15 h-15 " />
          </div>
          <div className="tech-icons">
            <DiJavascript1 className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiReact className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiNodejs className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <SiExpress className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiMongodb className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <SiMysql className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiGit className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiPython className="w-15 h-15" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
