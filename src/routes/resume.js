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
              Implement search functionality for an internal application using
              AngularJS and ElasticSearch. Familiarity with state management
              using RxJS.
            </li>
            <li>
              Design and develop REST APIs to create backend services using
              .NET, facilitated communication between frontend and backend
              applications.
            </li>
            <li>
              Write SQL scripts to fetch application data from database, wrote
              up-scripts and stored procedures in SQL Server Management Studio.
            </li>
          </ul>
        </div>
        <div>
          <h2>Humana - Software Engineer Intern</h2>
          <p className="text-base italic">May 2022 – Aug. 2022</p>
          <ul className="pl-4 text-lg">
            <li>
              Develop user-facing features using Typescript and Vue.js in
              collaboration with UX design team, state management with
              Reactivity API. Test Driven Development with tools like Jest and
              Cypress.
            </li>
            <li>
              Design, code, test and debug backend applications written in .NET,
              communicate with database with SQL scripts.
            </li>
            <li>
              Collaborate with developers on implementing time-sensitive
              features in a pair-programming environment following Agile
              software development approach.
            </li>
          </ul>
        </div>
        <div>
          <h2>US Air Force - Supply Chain and Logistics Management</h2>
          <p className="text-base italic">May 2022 – Aug. 2022</p>
          <ul className="pl-4 text-lg">
            <li>
              Monitored daily shift operations in an aircraft maintenance unit.
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
            Bookish |{" "}
            <span className="text-lg italic">
              JavaScript, Next.js, Supabase, TailwindCSS
            </span>
          </h2>
          <ul className="pl-4 text-lg">
            <li>
              Designed and developed a dashboard to track my personal library
              with the ability to maintain reading-lists, wishlists and marking
              books as read.
            </li>
            <li>
              State management, routing and event handling with React.js,
              MongoDB databases and Bootstrap for styling and layout.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <h2>
          Tool Lending Library |{" "}
          <span className="text-lg italic">
            Python, Flask, SQLite, TailwindCSS
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
      </div>
      <div>
        <h1 className="underline text-2xl">Technical Skills</h1>
        <ul className="pl-4 text-lg">
          <li>
            Languages: Java, Python, C, SQL, JavaScript, TypeScript, HTML/CSS
          </li>
          <li>
            {" "}
            Developer Tools: Git, Docker, VS Code, Visual Studio, MSSQL, Kafka,
            ElasticSearch Libraries: pandas, NumPy, Matplotlib, SciPy
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
  );
}
