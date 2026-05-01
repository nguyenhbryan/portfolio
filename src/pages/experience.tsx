export default function Experience() {
  return (
    <>
      <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
        <h1 className="text-5xl text-bold">Experience</h1>
        <div className="flex justify-between mt-4">
          <div className="flex items-end">
            <h2 className="text-3xl italic">SuperDARN</h2>
            <a
              href="https://vt.superdarn.org"
              target="_blank"
              className="text-xl hover:underline mx-2 text-yellow-100 "
            >
              vt.superdarn.org
            </a>
          </div>
          <h2 className="text-2xl">February 2026 - Present</h2>
        </div>
        <h2 className="text-2xl my-2">Software Development Intern</h2>
        <div className="flex flex-col items-center mt-2">
          <img src="Superdarn.png" className="w-md h-md rounded-xl"></img>
          <ul className="my-2 text-lg">
            <li>
              Maintained the SuperDARN website, adding features and improving
              usability
            </li>
            <li>
              Created a Web API to download data, with authentication and data
              usage logging.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
