export default function HalfSidedGlassMorphismAuthentication() {
  return (
    <section className=" size-full bg-[url('https://images.unsplash.com/photo-1692606674482-effe67e384d9?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative flex justify-center items-center lg:justify-end max-h-full bg-cover lg:p-0 px-2 md:px-12 py-6 ">
      <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white/60 backdrop-blur-2xl lg:border-l border-white/50 rounded-3xl lg:rounded-r-none lg:py-24 md:flex-none md:px-20 sm:justify-center border-t lg:border-t-0">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <h1 className="text-3xl font-semibold tracking-tighter text-neutral-900">
            Copy paste component, <br />
            <span className="text-neutral-600">in seconds</span>
          </h1>
          <p className="mt-4 text-base font-medium text-neutral-500">
            A simple and easy way to copy paste components from the web.
          </p>

          <div className="mt-8">
            <button
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-white rounded-xl hover:bg-white/50 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              type="button"
              aria-label="Sign in with Google"
            >
              <GoogleIcon className="size-6" />
              <span>Sign in with Google</span>
            </button>
            <div className="relative py-3">
              <div className="relative flex justify-center">
                <span className="px-2 text-sm text-neutral-500 before:left-0 before:w-4/12 before:h-px sm:before:bg-neutral-300 before:absolute before:top-1/2 before:-translate-y-1/2 after:right-0 after:w-4/12 after:h-px sm:after:bg-neutral-300 after:absolute after:top-1/2 after:-translate-y-1/2">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
          <form>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-3 text-sm font-medium text-black"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="block w-full h-12 px-4 py-2 text-amber-500 duration-200 rounded-xl appearance-none bg-white placeholder-neutral-300  focus:outline-none focus:ring-neutral-300 sm:text-sm"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="password"
                  className="block mb-3 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="block w-full h-12 px-4 py-2 text-amber-500 duration-200 rounded-xl appearance-none bg-white placeholder-neutral-300 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                  placeholder="Type password here..."
                  type="password"
                />
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-neutral-900 rounded-xl hover:bg-neutral-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Sign in
                </button>
              </div>
            </div>
            <div className="mt-6">
              <p className="flex mx-auto text-sm font-medium leading-tight text-center text-black">
                Not have a password?
                <a
                  className="ml-auto text-amber-500 hover:text-black"
                  href="/forms/signup"
                >
                  Sign up now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      {...props}
    >
      <title>Google Logo</title>
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}
