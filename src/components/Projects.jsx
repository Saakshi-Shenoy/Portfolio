import React from 'react';

function Projects() {
  return (
    <div className='bg-teal-800'>
    <section className="text-gray-600 body-font" style={{ fontFamily: "Montserrat"}}>
    <div className="container px-5 py-10 mx-auto">
          <h1 className="sm:text-3xl text-3xl text-white font-bold title-font mb-10 text-gray-900 items-center text-center justify-center" style={{fontSize:"2.5em"}}>
            PROJECTS
          </h1>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
            <h3 className="tracking-widest text-xs font-bold title-font mb-2">
              FRONTEND
            </h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-3">
              NEWSMON
            </h2>
            <p className="leading-relaxed text-sm" style={{fontSize: "0.9em"}}>
              A fully responsive website that provides timely coverage and other information about important events around the globe through the usage of APIs.
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/721x401"
              alt="content"
            />
            <h3 className="tracking-widest text-500 text-xs font-bold title-font mb-2">
              MERN STACK
            </h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-3">
              JIFFY
            </h2>
            <p className="leading-relaxed text-base" style={{fontSize: "0.9em"}}>
              A responsive and robust food ordering and delivery website designed to streamline and expedite the food delivery process.
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/722x402"
              alt="content"
            />
            <h3 className="tracking-widest mb-2 text-xs font-bold title-font">
              FERN STACK
            </h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-3">
              SMARTSPEND
            </h2>
            <p className="leading-relaxed text-base" style={{fontSize: "0.9em"}}>
              An expense tracking website that includes the features of budget management, financial insights, peer-to-peer lending and reminders.
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/723x403"
              alt="content"
            />
            <h3 className="tracking-widest text-xs font-bold title-font mb-2">
              MERN STACK
            </h3>
            <h2 className="text-lg text-gray-900 font-bold title-font mb-3">
              CATALYSIS v2.0
            </h2>
            <p className="leading-relaxed text-base" style={{fontSize: "0.9em"}}>
              Contribution to a college event website for a Technical fest that provides details regarding the events and facilitates the feature of registration to the events.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Projects;
