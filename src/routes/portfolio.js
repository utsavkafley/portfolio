export default function Portfolio() {
  const projects = [
    {
      name: "National Parks",
      description:
        "A simple app utilizing the National Parks API that allows users to search for national parks, filter by states, and view details about each park.",
      stack: ["react", "html", "css", "javascript", "tailwindcss"],
      github: "https://github.com/utsavkafley/npfinder",
      link: "https://npfinder.vercel.app/",
    },
    {
      name: "Penn Tool Library",
      description:
        "A online store built to support the idea of a community tool lending library. The site allows users to browse tools, add them to their cart, and send borrow requests.",
      stack: ["python", "html", "css", "flask", "mysql"],
      github: "https://github.com/utsavkafley/",
      link: "",
    },
    {
      name: "Bookish",
      description:
        "A simple app that allows users to manage their library, search for books, and add books to their shelves. Connects on the backend with API built using node.js and express. Mongodb database.",
      stack: ["react", "html", "css", "javascript", "mongodb", "nodejs"],
      github: "https://github.com/utsavkafley/",
      link: "",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      {/* PROJECTS */}
      <div className="flex flex-col flex-wrap md:flex-row items-center justify-center w-full h-full">
        {projects.map((project) => (
          <div className="flex flex-col justify-between w-80 h-80 border-primary border-2 my-4 md:mx-4 p-4">
            <div>
              <div className="flex flex-row items-baseline justify-between space-x-2">
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <div className="flex flex-row space-x-1">
                  <a
                    href={project.github}
                    className="px-2 py-1  rounded border-2 border-secondary hover:bg-secondary"
                  >
                    <img
                      src="./images/icons/github.svg"
                      className="w-4 h-4"
                      alt="github"
                    />
                  </a>
                  <a
                    href={project.link}
                    className="px-2 py-1 rounded border-2 border-secondary hover:bg-secondary"
                  >
                    <img
                      src="./images/icons/link.svg"
                      className="w-4 h-4"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <p className="text-justify mt-4">{project.description}</p>
            </div>
            <div>
              <p className="font-bold my-2 self-start ">Built with:</p>
              <div className="flex flex-row items-center justify-center w-full h-full">
                {project.stack.map((tech) => (
                  <div className="w-full h-full">
                    <img
                      src={`./images/icons/${tech}.svg`}
                      alt={tech}
                      className="w-8 h-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
