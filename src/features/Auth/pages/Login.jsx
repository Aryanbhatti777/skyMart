import { useNavigate } from "react-router";
import { useAuth } from "../hooks/AuthHook";

const Login = () => {
  // const navigate = useNavigate();
  let { navigate, register, handleSubmit, reset, errors, loginForm } = useAuth();


  return (
    <div className="min-h-screen bg-[#09090b] flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-[#09090b] p-12">
        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] bottom-[-150px] right-[-100px]" />

        <div className="relative z-10 flex flex-col justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>

            <h1 className="text-2xl font-bold text-white">
              sky<span className="text-violet-200">Mart</span>
            </h1>
          </div>

          {/* Main Content */}
          <div className="max-w-lg">
            <p className="text-violet-200 font-medium mb-4">
              YOUR SHOPPING DESTINATION
            </p>

            <h2 className="text-5xl xl:text-6xl font-bold text-white leading-[1.05]">
              Everything you
              <br />
              need, <span className="text-violet-200">in one place.</span>
            </h2>

            <p className="text-white/60 text-lg mt-6 max-w-md leading-relaxed">
              Discover products you love, enjoy effortless shopping, and get
              everything delivered right to your doorstep.
            </p>
          </div>

          {/* Bottom */}
          <p className="text-white/40 text-sm">
            © 2026 SkyMart. All rights reserved.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[430px]">
          {/* Mobile Logo */}
          <div className="flex lg:hidden justify-center mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-violet-500 flex items-center justify-center">
                <span className="text-lg">⚡</span>
              </div>

              <h1 className="text-2xl font-bold text-white">
                sky<span className="text-violet-400">Mart</span>
              </h1>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Welcome back
            </h2>

            <p className="text-gray-500 mt-2">Sign in to continue shopping</p>
          </div>

          {/* Form */}
          <form onClick={handleSubmit(loginForm)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email address
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {required: "Email is required"})}
                  className="
                    w-full h-14
                    bg-[#151518]
                    border border-white/10
                    rounded-2xl
                    pl-12 pr-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-violet-500
                    focus:ring-4 focus:ring-violet-500/10
                    transition
                  "
                />
              </div>
              {errors.email && <p className="text-red-500">{ errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-400">Password</label>
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  🔒
                </span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {required: "Password is required"})}
                  className="
                    w-full h-14
                    bg-[#151518]
                    border border-white/10
                    rounded-2xl
                    pl-12 pr-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-violet-500
                    focus:ring-4 focus:ring-violet-500/10
                    transition
                  "
                />
              </div>
              {errors.password && <p className="text-red-500">{ errors.password.message}</p>}
            </div>

            {/* Button */}
            <button
              className="
                w-full h-14
                rounded-2xl
                bg-violet-600
                hover:bg-violet-500
                text-white
                font-semibold
                transition
                flex items-center justify-center gap-2
                shadow-lg shadow-violet-600/10
              "
            >
              Sign In
              <span className="text-xl">→</span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xs text-gray-600">OR</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-violet-400 font-semibold cursor-pointer hover:text-violet-300"
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
