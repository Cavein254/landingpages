import { FaBullhorn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="w-3/6">
      <div className="mt-4">
        <div className="flex flex-row justify-center">
          <FaBullhorn className="text-3xl text-blue-700 font-bold" />{" "}
          <span className="text-3xl text-blue-700 font-bold">Vote</span>
        </div>
        <div>
          <h1 className="font-bold text-center text-4xl mt-4 mb-4">
            Welcome Back
          </h1>
        </div>
        <div className="flex justify-center">
          <button className="bg-white rounded-sm px-6 py-2 shadow-2xl">
            <div className="flex flex-row justify-between items-center">
              <div>
                <FcGoogle className="ml-1" />
              </div>
              <div>
                <span className="ml-2 text-blue-900 font-bold">
                  Log in with Google
                </span>
              </div>
              <div></div>
            </div>
          </button>
        </div>
        <div className="my-6">
          <p className="text-center text-gray-400 uppercase">
            or login with email
          </p>
        </div>
        <div className="flex justify-center">
          <form>
            <div className="">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full font-bold text-blue-900 pl-2 placeholder-blue-900 border-[1px] border-gray-100 rounded-sm py-2 focus:outline-none"
              />
            </div>
            <div className="mt-2">
              <input
                type="password"
                placeholder="Password"
                className="w-full font-bold text-blue-900 pl-2 placeholder-blue-900 border-[1px] border-gray-100 rounded-sm py-2 focus:outline-none"
              />
            </div>
            <div className="mt-2 flex flex-row text-xs text-blue-900 font-bold">
              <div className="flex flex-row">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="ml-1 mr-2">
                  <p>Keep me logged in</p>
                </div>
              </div>
              <div className="ml-4">
                <p>
                  <a href="#" className="underline">
                    Forgot Password?
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full my-6">
              <button className="w-full bg-blue-900 text-white font-bold px-auto py-2">
                Log In
              </button>
            </div>
            <div className="pb-12">
              <p className="text-gray-400">
                Don't have an account yet?{" "}
                <span className="text-blue-900 underline">Sign Up</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
