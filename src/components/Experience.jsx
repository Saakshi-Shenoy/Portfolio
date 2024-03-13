import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="bg-teal-800" style={{ fontFamily: "Montserrat" }}>
      <h1
        className="sm:text-3xl text-3xl text-white font-bold title-font mb-10 pt-5 text-gray-900 items-center text-center justify-center"
        style={{ fontSize: "2.5em", fontWeight: "730" }}
      >
        EXPERIENCE
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="November 2022 - present"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon=""
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
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="August 2023 - October 2023"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon=""
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
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="October 2022 - December 2022"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon=""
        >
          <h3 className="vertical-timeline-element-title text-black">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Dayanand Sagar College of Engineering, Bangalore
          </h4>
          <p className="text-black">
            UI Design, Frontend Development <br /> Internship ended with the
            completion of a Team Project.
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon=""
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
