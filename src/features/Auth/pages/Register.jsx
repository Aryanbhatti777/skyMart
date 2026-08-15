import { useAuth } from "../hooks/AuthHook";

const Register = () => {
  let { navigate, register, handleSubmit, reset, errors, registerForm } = useAuth();

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-4">
      <div className="w-full max-w-[460px]">

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-xl bg-violet-500 flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>

            <h1 className="text-2xl font-bold text-white">
              sky<span className="text-violet-400">Mart</span>
            </h1>
          </div>
        </div>

   
        <div className="bg-[#111113] border border-white/10 rounded-[26px] px-7 sm:px-10 py-9">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              Create account
            </h2>

            <p className="text-gray-500 mt-2">
              Join SkyMart and start shopping
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(registerForm)}>
 
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                👤
              </span>

              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Full name"
                className="w-full h-14 rounded-2xl bg-[#1b1b1e] border border-white/10
                pl-12 pr-4 text-white placeholder:text-gray-600
                outline-none focus:border-violet-500 transition"
              />
            </div>
            {errors.name && <p className="text-red-500">{ errors.name.message}</p>}


            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                ✉
              </span>

              <input
                type="email"
                placeholder="Email address"
                {...register("email", { required: "Email is required" })}
                className="w-full h-14 rounded-2xl bg-[#1b1b1e] border border-white/10
                pl-12 pr-4 text-white placeholder:text-gray-600
                outline-none focus:border-violet-500 transition"
              />
            </div>
            {errors.email && <p className="text-red-500">{ errors.email.message}</p>}


            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                🔒
              </span>

              <input
                type="password"
                placeholder="Password (min 6 chars)"
                {...register("password", { required: "Password is required" })}
                className="w-full h-14 rounded-2xl bg-[#1b1b1e] border border-white/10
                pl-12 pr-4 text-white placeholder:text-gray-600
                outline-none focus:border-violet-500 transition"
              />
            </div>
            {errors.password && <p className="text-red-500">{ errors.password.message}</p>}
            


            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                🔒
              </span>

              <input
                type="password"
                placeholder="Confirm password"
                {...register(
                  "confirmPassword",
                  { required: " Confirm Password is required" }
                )}
                className="w-full h-14 rounded-2xl bg-[#1b1b1e] border border-white/10
                pl-12 pr-4 text-white placeholder:text-gray-600
                outline-none focus:border-violet-500 transition"
              />
              
            </div>
            {errors.confirmPassword && <p className="text-red-500">{ errors.confirmPassword.message}</p>}


            <button
              className="w-full h-14 mt-2 rounded-2xl
              bg-violet-500 hover:bg-violet-400
              text-white font-semibold text-base
              transition-all duration-200
              flex items-center justify-center gap-2 cursor-pointer"
            >
              Create Account
              <span className="text-xl">→</span>
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-violet-400 font-semibold cursor-pointer hover:text-violet-300"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
