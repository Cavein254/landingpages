import LoginImg from "../assets/logins.svg";
import { GoPerson } from "react-icons/go";
import { AiFillLock } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImGoogle3 } from "react-icons/im";
const Login = () => {
  return (
    <div className="shadow-lg bg-gray-100 rounded-lg flex flex-col p-8 justify-center w-[350px] mx-[5%]">
      <div className="flex justify-center">
        <img src={LoginImg} alt="login image" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl text-center">Welcome back!</h1>
        <p className="text-gray-400 text-center">
          Login to Your Existing Account
        </p>
      </div>
      <form className="flex flex-col justify-center items-center mt-2">
        <div className="relative font-bold text-xl text-blue-900">
          <GoPerson className="absolute mt-3 ml-2" />
          <input
            className="focus:outline-none rounded-full shadow-lg px-4 py-2 pl-8 text-blue-900"
            placeholder="jones@gmail.com"
            type="text"
          />
        </div>
        <div className="relative font-bold text-xl text-blue-900 mt-4">
          <AiFillLock className="absolute mt-3 ml-2" />
          <input
            className="focus:outline-none rounded-full shadow-lg px-4 py-2 pl-8 text-blue-900"
            placeholder="password"
            type="password"
          />
        </div>
        <div className="flex justify-end items-end w-full mt-4">
          <p className="text-blue-900 text-end font-bold">Forgot Password?</p>
        </div>
        <div className="mt-4">
          <button className="px-8 py-2 text-lg font-bold bg-blue-600 text-white rounded-full uppercase">
            Log in
          </button>
        </div>
        <div className="my-4">
          <p className="text-gray-400">or connect using</p>
        </div>
        <div>
          <button>
            <div className="flex justify-center items-center rounded-md text-white font-bold px-4 py-2 bg-blue-800">
              <BsFacebook className="mr-2" />
              Facebook
            </div>
          </button>
          <button className="ml-2">
            <div className="flex justify-center items-center rounded-md text-white font-bold px-4 py-2 bg-red-600">
              <ImGoogle3 className="mr-2" />
              Google
            </div>
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-400 text-sm">
            {" "}
            Don't have an account?{" "}
            <span className="text-blue-400 font-bold"> Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
