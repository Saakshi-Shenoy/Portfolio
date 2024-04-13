import React from "react";
// import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import "../App.css";

function Skills() {
    return (
      <div className="flex justify-center pb-12">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2">
          <div className="tech-icons">
            <CgCPlusPlus className="w-15 h-15 " />
          </div>
          <div className="tech-icons">
            <DiJavascript1 className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiNodejs className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiReact className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiMongodb className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiGit className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <SiExpress className="w-15 h-15" />
          </div>
          <div className="tech-icons">
            <DiPython className="w-15 h-15" />
          </div>
        </div>
      </div>
    );
  }

export default Skills;