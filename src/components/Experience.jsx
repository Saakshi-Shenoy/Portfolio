import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import genesis from "../assets/genesis.png";
import websa from "../assets/websa.jpg";
import dsce from "../assets/dsce.jpg";
import nokia from "../assets/nokia.jpg";
import "../App.css";

function Experience() {
  return (
    <div
      id="experience"
      className="bg-teal-800 mt-10 experience-spacing"
      style={{ fontFamily: "Montserrat" }}
    >
      <h1
        className="sm:text-3xl text-3xl text-white font-bold title-font mb-10 text-gray-900 items-center text-center justify-center mt-10"
        style={{ fontSize: "2.5em", fontWeight: "730", paddingTop: "90px" }}
      >
        EXPERIENCE
      </h1>

      <div>
      <VerticalTimeline >
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="April 2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src={nokia} alt="myLogo" className="rounded-full" />}
        >
          <h3 className="vertical-timeline-element-title text-black">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Nokia, Bangalore
          </h4>
          <p className="text-black">
            Development of an Intent-based LLM for the purpose of Service Orchestration. <br />
          </p>
          <p className="text-gray-500 font-semibold lg:hidden md:hidden">April 2024 - Present</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="November 2022 - present"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon={<img src={genesis} alt="myLogo" className="rounded-full" />}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Genesis Student Forum - DSCE, Bangalore
          </h4>
          <p className="text-black">
            Development of clean and robust websites to provide information and
            facilitate the registration to events organised by the Department of
            Information Science and Engineering.
          </p>
          <p className="text-gray-500 font-semibold lg:hidden md:hidden">November 2022 - present</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="August 2023 - October 2023"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon={<img src={websa} alt="myLogo" className="rounded-full" />}
        >
          <h3 className="vertical-timeline-element-title text-black">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Emertxe Information Technologies - WebStack Academy
          </h4>
          <p className="text-black">
            MERN Stack Web Development
            <br /> Internship involved the development of a comprehensive Food
            Delivery Website.
          </p>
          <p className="text-gray-500 font-semibold lg:hidden md:hidden">August 2023 - October 2023</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="October 2022 - December 2022"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon={<img src={dsce} alt="myLogo" className="rounded-full" />}
        >
          <h3 className="vertical-timeline-element-title text-black">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Dayanand Sagar College of Engineering, Bangalore
          </h4>
          <p className="text-black">
            UI Design, Frontend Development <br /> Internship ended with the
            completion of a Team Project.
          </p>
          <p className="text-gray-500 font-semibold lg:hidden md:hidden">October 2022 - December 2022</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
