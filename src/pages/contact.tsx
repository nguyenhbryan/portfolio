export default function Contact() {
  return (
    <>
      <section className="flex flex-col w-full min-h-screen">
        <h2 className="text-5xl">Contact Information</h2>
        <div className="flex flex-col items-center my-5">
          <div className="info-item">
            <p>
              <strong>Email:</strong> nguyenbryan18@vt.edu
            </p>
          </div>
          <div className="info-item">
            <p>
              <strong>Phone:</strong> (571) 306-8196
            </p>
          </div>
          <div className="info-item">
            <p>
              <strong>Location:</strong> Springfield, Virginia
            </p>
          </div>
          <div className="flex gap-3 mt-6">
            <a
              href="https://github.com/nguyenhbryan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-500 p-1 rounded-md hover:bg-slate-300 transition"
            >
              <img src="/Github.png" className="size-14"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/bryan-nguyen-h"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-500 p-1 rounded-md hover:bg-slate-300 transition"
            >
              <img src="/Linkedin.png" className="h-14 w-16"></img>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
