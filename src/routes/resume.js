export default function Resume() {
  return (
    <div className="flex flex-col xl:w-1/2 gap-y-4 px-8 xl:px-20 mb-4 font-roboto text-xl">
      <div>
        <h1 className="underline text-2xl">Education</h1>
        <div className="flex flex-col">
          <h2>Pennsylvania State University University Park, PA</h2>
          <p className="text-base italic">May 2022 – Aug. 2022</p>

          <p className="text-lg pl-4">
            Bachelor of Science in Computer Science
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="underline text-2xl">Experience</h1>
        <div>
          <h2>XPO Logistics - Software Engineer Intern</h2>
          <p className="text-base italic">May 2022 – Aug. 2022</p>
          <ul className="pl-4 text-lg">
            <li>
              Developed user facing features on a full-stack logistics platform
              (<a href="https://app.ltl.xpo.com/">https://app.ltl.xpo.com/</a>)
              using TypeScript, Angular and ASP.NET Core.
            </li>
            <li>
              Devised SQL scripts and managed time-sensitive updates, including
              content changes and database upgrades in a fast-paced environment.
            </li>
            <li>Experience designing and working with REST APIs.</li>
            <li>Exposure to Kafka event streaming and ElasticSearch.</li>
          </ul>
        </div>
        <div>
          <h2>Humana - Software Engineer Intern</h2>
          <p className="text-base italic">May 2022 – Aug. 2022</p>
          <ul className="pl-4 text-lg">
            <li>
              Developed user facing features on a full-stack health platform (
              <a href="https://plans.humana.com">https://plans.humana.com</a>)
              using JavaScript, Vue.js, .NET.
            </li>
            <li>CI/CD automation and integration with Azure DevOps.</li>
            <li>
              Writing and running tests across applications using Test Driven
              Development methodologies.
            </li>
          </ul>
        </div>
        <div>
          <h2>US Air Force - Supply Chain and Logistics Management</h2>
          <p className="text-base italic">May 2022 – Aug. 2022</p>
          <ul className="pl-4 text-lg">
            <li>
              Monitored daily shift operations in an aircraft maintenance unit.
            </li>
            <li>
              Logistics support to over 20 aircraft, aircrew and ground support
              technicians.
            </li>
            <li>
              Led multiple warehouse reports programs over 12 annual and
              quarterly inspections with less than 10% failure rate.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="underline text-2xl">Projects</h1>
        <div className="flex flex-col">
          <h2>
            National Park Finder |{" "}
            <span className="text-lg italic">
              JavaScript, React, TailwindCSS
            </span>
          </h2>
          <ul className="pl-4 text-lg">
            <li>
              Designed and developed a web app using JavaScript that lets users
              explore national park information.
            </li>
            <li>Data populated using the nps.gov API.</li>
            <li>
              State management, routing and event handling with React.js and
              Bootstrap for styling and layout.
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2>
            Tool Lending Library |{" "}
            <span className="text-lg italic">
              Python, Flask, MongoDB, TailwindCSS
            </span>
          </h2>
          <ul className="pl-4 text-lg">
            <li>
              Designed and developed a Tool Lending Library app to provide
              hardware and tools free of cost to members of the community who
              can’t afford to own one.
            </li>
            <li>
              Used Flask to handle the back-end with MongoDB databases and
              Bootstrap for styling and layout.
            </li>
          </ul>
          <div className="flex flex-col">
            <h2>
              Bookish |{" "}
              <span className="text-lg italic">
                JavaScript, React, MongoDB, TailwindCSS
              </span>
            </h2>
            <ul className="pl-4 text-lg">
              <li>
                Designed and developed a dashboard to track my personal library
                with the ability to maintain reading-lists, wishlists and
                marking books as read.
              </li>
              <li>
                State management, routing and event handling with React.js,
                MongoDB databases and Bootstrap for styling and layout.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="underline text-2xl">Technical Skills</h1>
          <ul className="pl-4 text-lg">
            <li>
              Languages: Java, Python, C, SQL, JavaScript, TypeScript, HTML/CSS
            </li>
            <li>
              {" "}
              Developer Tools: Git, Docker, VS Code, Visual Studio, MSSQL,
              Kafka, ElasticSearch Libraries: pandas, NumPy, Matplotlib, SciPy
            </li>
            <li> Workflow: Test Driven Development, Pair Programming </li>
          </ul>
        </div>
        <div>
          <h1 className="underline text-2xl">Awards and Recognition</h1>
          <p className="pl-4 text-lg">
            Air Force Achievement Medal: Recognized for meritorious service
            supporting Operation Inherent Resolve
          </p>
        </div>
      </div>
    </div>
  );
}
