function App() {
  return (
    <>
      <main className="bg-red-400 md:h-screen flex justify-center py-20">
        <div className="flex items-center flex-col  px-10 gap-y-10 lg:flex-row lg:w-5/6">
          <section className="flex flex-col gap-y-10 text-white">
            <h1 className="text-3xl text-center font-bold  lg:text-5xl lg:text-start lg:w-96">
              Learn to code by watching others
            </h1>
            <p className="text-center leading-relaxed lg:text-start lg:w-4/5">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </section>
          <section className="flex flex-col justify-center items-center gap-5 lg:w-4/5">
            <button className="w-full bg-purple-900 py-3 px-10 lg:px-2 rounded-lg text-white font-simebold">
              Try it free 7 days then $20/mo. thereafter
            </button>
            <form
              action="#"
              method="get"
              className="flex flex-col bg-white w-full rounded-lg p-10"
            >
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  className="px-2 py-3 rounded-lg text-white font-simebold border border-purple-900"
                  placeholder="First Name "
                />
                <input
                  type="text"
                  className="px-2 py-3 rounded-lg text-white font-simebold border border-purple-900"
                  placeholder="Last Name "
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="px-2 py-3 rounded-lg text-white font-simebold border border-purple-900"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="px-2 py-3 rounded-lg text-white font-simebold border border-purple-900"
                  placeholder="Password"
                />
                <button className="px-2 py-3 rounded-lg text-white font-simebold bg-green-600 hover:opacity-90">
                  Claim your free trial
                </button>
              </div>
              <p className="text-center text-xs my-3">
                By clicking the button, you are agreeing to our{" "}
                <span className="font-bold text-red-500">
                  Terms and Services
                </span>
              </p>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
