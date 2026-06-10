export default function Experience() {
  return (
    <>
      <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
        <h1 className="text-5xl font-bold">Experience</h1>
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
          <img
            src="Superdarn.png"
            alt="SuperDARN website preview"
            className="w-md h-md rounded-xl"
          ></img>
          <ul className="my-2 text-lg">
            <li>
              Maintained and improved the SuperDARN website by shipping
              user-facing updates, fixing usability issues, and supporting
              researchers who rely on the site.
            </li>
            <li>
              Created an authenticated Web API for data downloads, including
              request logging to track usage and support safer access to
              research data.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
