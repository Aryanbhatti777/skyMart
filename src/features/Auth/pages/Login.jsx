import { useAuth } from "../hooks/AuthHook";

const Login = () => {
  const { navigate, register, handleSubmit, errors, loginForm } = useAuth();

  return (
    <div className="min-h-screen flex bg-[#09090b]">
      <div className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-[#09090b] p-12 lg:flex">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute -right-[100px] -bottom-[150px] h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[120px]" />

        <div className="relative z-10 flex w-full flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
              <span className="text-xl">⚡</span>
            </div>

            <h1 className="text-2xl font-bold text-white">
              sky<span className="text-violet-200">Mart</span>
            </h1>
          </div>

          <div className="max-w-lg">
            <p className="mb-4 font-medium text-violet-200">
              YOUR SHOPPING DESTINATION
            </p>

            <h2 className="text-5xl leading-[1.05] font-bold text-white xl:text-6xl">
              Everything you
              <br />
              need, <span className="text-violet-200">in one place.</span>
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
              Discover products you love, enjoy effortless shopping, and get
              everything delivered right to your doorstep.
            </p>
          </div>

          <p className="text-sm text-white/40">
            © 2026 SkyMart. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="w-full max-w-[430px]">
          <div className="mb-10 flex justify-center lg:hidden">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500">
                <span className="text-lg">⚡</span>
              </div>

              <h1 className="text-2xl font-bold text-white">
                sky<span className="text-violet-400">Mart</span>
              </h1>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Welcome back
            </h2>
            <p className="mt-2 text-gray-500">
              Sign in to continue shopping
            </p>
          </div>

          <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Email address
              </label>

              <div className="relative">
                <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#151518] pr-4 pl-12 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Password
              </label>

              <div className="relative">
                <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500">
                  🔒
                </span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#151518] pr-4 pl-12 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 font-semibold text-white shadow-lg shadow-violet-600/10 transition hover:bg-violet-500"
            >
              Sign In
              <span className="text-xl">→</span>
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-gray-600">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer font-semibold text-violet-400 hover:text-violet-300"
            >
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;