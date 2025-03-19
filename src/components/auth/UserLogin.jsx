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
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    form: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
      form: "",
    });

    if (emailError || passwordError) {
      return;
    }

    try {
      const response = await fetch("/api/v1/user/login", {
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
        setErrors({
          ...errors,
          form: errorData.message || "Invalid email or password",
        });
        return;
      }

      const data = await response.json();
      console.log(data);
      setUser(data);
      navigate("/profile");
    } catch (error) {
      setErrors({
        ...errors,
        form: "An error occurred. Please try again.",
      });
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
      {errors.form && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {errors.form}
        </div>
      )}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label className="pl-3 text-sm" htmlFor="email">
            Login
          </label>
          <div
            className={`w-full p-3 bg-gray-100 rounded-md border-2 ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
          >
            <input
              className="outline-none w-full"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={() =>
                setErrors({ ...errors, email: validateEmail(email) })
              }
              required
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs pl-3">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-3 text-sm" htmlFor="password">
            Password
          </label>
          <div
            className={`flex items-center gap-3 w-full p-3 bg-gray-100 rounded-md border-2 ${
              errors.password ? "border-red-500" : "border-gray-200"
            }`}
          >
            <input
              className="outline-none w-full"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onBlur={() =>
                setErrors({ ...errors, password: validatePassword(password) })
              }
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
          {errors.password && (
            <p className="text-red-500 text-xs pl-3">{errors.password}</p>
          )}
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
