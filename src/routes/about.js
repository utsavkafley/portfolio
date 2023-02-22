export default function About() {
  const techStack = [
    "html",
    "css",
    "javascript",
    "react",
    "vue",
    "angular",
    "nodejs",
    "mongodb",
    "mysql",
    "csharp",
    "dotnet",
    "flask",
    "python",
    "git",
  ];

  return (
    <div className=" flex flex-col justify-center items-center">
      <section className="w-3/5 space-y-4">
        <div className="flex flex-col xl:flex-row xl:space-x-4 items-start">
          <img
            src="./images/headshot.jpeg"
            alt="Utsav Kafley"
            className="w-32 md:w-64 h-32 md:h-64 rounded mb-8"
          />
          <div className="text-xl space-y-2">
            <h1 className="text-4xl">Hello!</h1>
            <p>
              My name is{" "}
              <span className="text-negative font-bold text-2xl">Utsav</span>,
              I'm a 28-year-old software developer from State College,
              Pennsylvania.
            </p>
            <p>
              I have experience developing full-stack web applications using
              HTML, CSS and JavaScript. I also have experience with frontend
              frameworks such as React, Vue.js, and Angular, backend frameworks
              such as Node.js, .NET, and Flask and databases such as MongoDB and
              MySQL.
            </p>
            <p>
              I'm a quick learner, a team player, and thrive in fast-paced and
              collaborative environments. I am eager to apply my skills and
              contribute to developing innovative and user-friendly applications
              that solve real-world problems.
            </p>
          </div>
        </div>
      </section>
      <section className="my-4 w-3/5">
        {/* image from techstack */}
        <div className="">
          <h1 className="text-2xl font-bold">Technical Skills</h1>
          <div className="flex flex-wrap justify-center">
            {techStack.map((tech) => (
              <div className="flex flex-col w-24 h-24 justify-center items-center rounded-md  border-secondary border-2 m-2">
                <img
                  src={`./images/icons/${tech}.svg`}
                  alt={tech}
                  className="w-8 h-8"
                />
                <p className="text-md font-roboto">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
