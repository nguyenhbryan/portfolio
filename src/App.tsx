import "./App.css";

function App() {
  return (
    <>
      <section className="font-sans">
        <div className="flex flex-row h-screen">
          <div className="flex flex-col text-slate-200">
            <h1 className="text-7xl py-2 text-slate-100">Hello!</h1>
            <p className="text-3xl pb-2">I'm Bryan Nguyen.</p>
            <p className="max-w-md text-xl">
              I'm a Virginia Tech undergraduate majoring in Computer Engineering. I am focused on creating apps that solve
              problems. I am quick to adapt, constantly learning new things.
              I've primarily built projects with Next.js and PostgreSQL.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
