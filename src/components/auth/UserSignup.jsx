import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import Submit from "./Submit";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UserSignup = ({ authView }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
        mode: "cors",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to login");
      }

      const data = await response.json();

      setUser(data);
      navigate("/profile");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form
      onSubmit={(event) => handleSignup(event)}
      action=""
      className="flex flex-col gap-0 w-2.9/3"
    >
      <div>
        <p className=" mb-10 text-3xl font-bold">Join the community!</p>
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
                onInput={(event) => setFirstName(event.target.value)}
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
                onInput={(event) => setLastName(event.target.value)}
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
              onInput={(event) => setEmail(event.target.value)}
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
          <div className="flex items-center gap-3 w-full p-3 bg-gray-100 rounded-md border-2 border-gray-200">
            <input
              id="signup--password"
              className="outline-none w-full"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              onInput={(event) => setPassword(event.target.value)}
              required
            />
            {showPassword ? (
              <AiFillEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
            ) : (
              <AiFillEye
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <div>
          <Submit valueContent="Sign up" />
        </div>
      </div>
      <div className="w-full my-10 h-[2px] bg-gray-100"></div>
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
