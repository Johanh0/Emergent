import Submit from "./Submit";

const UserSignup = ({ authView }) => {
  return (
    <form action="" className="flex flex-col gap-10 w-1/2">
      <div>
        <p className=" text-3xl font-bold">Help Disaster Victims</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-5">
          <div className="flex flex-col gap-2 w-1/2">
            <label
              className="pl-3 text-sm cursor-pointer"
              htmlFor="signup--first_name"
            >
              First Name
            </label>
            <div className="w-full p-3 bg-gray-100 rounded-md border-2 border-gray-200">
              <input
                id="signup--first_name"
                className="outline-none w-full"
                type="text"
                placeholder="Enter First Name"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label
              className="pl-3 text-sm cursor-pointer"
              htmlFor="signup--last_name"
            >
              Last Name
            </label>
            <div className="w-full p-3 bg-gray-100 rounded-md border-2 border-gray-200">
              <input
                id="signup--last_name"
                className="outline-none w-full"
                type="text"
                placeholder="Enter Last Name"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="pl-3 text-sm cursor-pointer"
            htmlFor="signup--email"
          >
            Email
          </label>
          <div className="w-full p-3 bg-gray-100 rounded-md border-2 border-gray-200">
            <input
              id="signup--email"
              className="outline-none w-full"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="pl-3 text-sm cursor-pointer"
            htmlFor="signup--password"
          >
            Password
          </label>
          <div className="w-full p-3 bg-gray-100 rounded-md border-2 border-gray-200">
            <input
              id="signup--password"
              className="outline-none w-full"
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>
        </div>
        <div>
          <Submit valueContent="Sign up" />
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-100"></div>
      <div className="flex justify-center">
        <p>
          Already have an account?{" "}
          <span className=" text-bunker-400 cursor-pointer" onClick={authView}>
            Sign in now
          </span>
        </p>
      </div>
    </form>
  );
};

export default UserSignup;
