import React from "react";
import PropTypes from "prop-types";
import { BsDownload } from "react-icons/bs";
import { Card } from "flowbite-react";
import { BsLinkedin, BsGithub,} from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import UserProfile from "../assets/user-prof.png";

function About(props) {

const emailAddress = 'shenoy.saakshi910@gmail.com';

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
    <section className="text-gray-600 body-font lg:pl-20">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
          <Card className="max-w-sm mb-5 bg-teal-600">
            <div className="flex flex-col items-center">
            <img src={UserProfile} className="mb-3 rounded-full shadow-lg h-45 w-45" alt="Saakshi Shenoy"  />

              <h5 className="mb-1 text-2xl font-medium text-gray-900 text-white pt-5 pb-3">
                Saakshi Shenoy
              </h5>
              <span className="text-sm text-gray-300 pb-10">
                MERN-Stack Web Developer | C++ Programmer
              </span>
                <div className="w-full">
                    <div className="justify-center items-center">
                    <div className="flex space-x-6 justify-center items-center">
                        <a href="https://www.linkedin.com/in/saakshi-shenoy/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin style={{ color: 'white',fontSize: '22px' }} />
                        </a>
                        <a href={`mailto:${emailAddress}`}>
                        <IoMdMail style={{ color: 'white', fontSize: '22px' }} />
                        </a>
                        <a href="https://github.com/Saakshi-Shenoy" target="_blank" rel="noopener noreferrer">
                        <BsGithub style={{ color: 'white', fontSize: '22px' }} />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
          </Card>
        <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl mb-4 font-medium text-gray-900 pb-5" style={{fontSize:"5em"}}>
            Hello!<br className="hidden lg:inline-block"></br>
          </h1>
          <p className="mb-8 leading-relaxed">
            I am Saakshi.
          </p>
          <div className="flex justify-center">
            <button
              class="cursor-pointer transition-all bg-teal-500 text-white px-6 py-2 rounded-lg border-teal-600
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              onClick={handleDownload}
            >
              <div className="flex items-center">
                <BsDownload className="mr-2" />
                <span>Resume</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

About.defaultProps = {
  theme: "blue",
};

About.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default About;
