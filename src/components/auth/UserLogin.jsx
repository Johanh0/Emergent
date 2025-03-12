import { Link } from "react-router-dom";
import Submit from "./Submit";

const UserLogin = ({ authView }) => {
  return (
    <form action="" className="flex flex-col gap-10 w-1/2">
      <div>
        <p className=" text-3xl font-bold">Nice to see you again!</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label className="pl-3 text-sm" htmlFor="">
            Login
          </label>
          <div className="w-full p-3 bg-gray-100 rounded-md border-2 border-gray-200">
            <input
              className="outline-none w-full"
              type="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-3 text-sm" htmlFor="">
            Password
          </label>
          <div className="w-full p-3 bg-gray-100 rounded-md border-2 border-gray-200">
            <input
              className="outline-none w-full"
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>
        </div>
        <div>
          <Submit valueContent="Sign in" />
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-100"></div>
      <div className="flex justify-center">
        <p>
          Don't have an account?{" "}
          <span className=" text-bunker-400 cursor-pointer" onClick={authView}>
            Sign up now
          </span>
        </p>
      </div>
    </form>
  );
};

export default UserLogin;
