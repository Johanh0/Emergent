import { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";
import Submit from "./Submit";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UserLogin = ({ authView }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  //   useState to handle the input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
      onSubmit={(event) => handleLogin(event)}
      action=""
      className="flex flex-col gap-10 w-2/3"
    >
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
              value={email}
              onInput={(event) => setEmail(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-3 text-sm" htmlFor="">
            Password
          </label>
          <div className="flex items-center gap-3 w-full p-3 bg-gray-100 rounded-md border-2 border-gray-200">
            <input
              className="outline-none w-full"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
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
