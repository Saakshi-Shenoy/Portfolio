import React from "react";
import { BsDownload } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import ME from "../assets/me.jpeg";

function About(props) {
  const emailAddress = "shenoy.saakshi910@gmail.com";

  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/u/0/uc?id=1OenKMmwgl2KXui96VK-cuScG0rFLxa_Q&export=download";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "SaakshiShenoy_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-7">
              <div className="rounded-full w-40 inline-flex items-center justify-center text-gray-400">
                <img
                  src={ME}
                  className="mb-3 rounded-full h-45 w-45"
                  alt="Saakshi Shenoy"
                />
              </div>
              <div
                className="flex flex-col items-center text-center justify-center"
                style={{ fontFamily: "Montserrat" }}
              >
                <h2 className="title-font font-bold mt-4 text-gray-900 text-2xl pb-2" style={{fontSize: "1.7em"}}>
                  SAAKSHI SHENOY
                </h2>
                <div className="w-20 h-1 bg-teal-500 rounded mt-2 mb-4"></div>
                <span className="text-sm text-gray-600 pb-7">
                  MERN-Stack Web Developer | C | C++ Programmer
                </span>
                <div className="w-full">
                  <div className="justify-center items-center">
                    <div className="flex space-x-6 justify-center items-center">
                      <a
                        href="https://www.linkedin.com/in/saakshi-shenoy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin
                          style={{ color: "teal", fontSize: "22px" }}
                        />
                      </a>
                      <a href={`mailto:${emailAddress}`}>
                        <IoMdMail style={{ color: "teal", fontSize: "22px" }} />
                      </a>
                      <a
                        href="https://github.com/Saakshi-Shenoy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub style={{ color: "teal", fontSize: "22px" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h1
                className="title-font sm:text-3xl mb-4 font-bold text-gray-900 pb-3"
                style={{ fontSize: "4em", fontFamily: "Montserrat" }}
              >
                Hello!<br className="hidden lg:inline-block"></br>
              </h1>
              <p
                className="leading-relaxed text-md mb-4"
                style={{ fontFamily: "Montserrat" }}
              >
                Welcome to my portfolio! Welcome to my portfolio! I'm a
                dedicated developer with proficiency in the MERN stack, C, and
                C++. I've honed my skills in crafting dynamic web applications
                using MongoDB, Express.js, React, and Node.js. Recently, I've
                ventured into the captivating realm of machine learning, driven
                by a keen interest in exploring its diverse applications. My
                commitment to perpetual learning fuels my journey, and I'm
                excited about the endless possibilities that machine learning
                presents. As I delve into the world of machine learning, I am
                eager to apply my programming skills to create intelligent and
                innovative solutions.
              </p>
              <div
                className="flex items-center justify-center sm:justify-start pt-1"
                style={{ fontFamily: "Montserrat" }}
              >
                <button
                  class="cursor-pointer transition-all bg-teal-700 text-white px-6 py-2 rounded-lg border-teal-500
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
  );
}

export default About;
