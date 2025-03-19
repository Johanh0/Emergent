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
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    form: "",
  });

  const validateFirstName = (firstName) => {
    if (!firstName) {
      return "First name is required";
    } else if (firstName.length < 2) {
      return "First name must be at least 2 characters";
    }
    return "";
  };

  const validateLastName = (lastName) => {
    if (!lastName) {
      return "Last name is required";
    } else if (lastName.length < 2) {
      return "Last name must be at least 2 characters";
    }
    return "";
  };

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

  const handleSignup = async (event) => {
    event.preventDefault();

    const firstNameError = validateFirstName(firstName);
    const lastNameError = validateLastName(lastName);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      password: passwordError,
      form: "",
    });

    if (firstNameError || lastNameError || emailError || passwordError) {
      return;
    }

    try {
      const response = await fetch("/api/v1/user/signup", {
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
        setErrors({
          ...errors,
          form: errorData.message || "Error creating account",
        });
        return;
      }

      const data = await response.json();

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
      onSubmit={(event) => handleSignup(event)}
      action=""
      className="flex flex-col gap-0 w-full lg:w-2.9/3"
    >
      <div>
        <p className=" mb-10 text-3xl font-bold">Join the community!</p>
      </div>
      {errors.form && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {errors.form}
        </div>
      )}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <label
              className="pl-3 text-sm cursor-pointer"
              htmlFor="signup--first_name"
            >
              First Name
            </label>
            <div
              className={`w-full p-3 bg-gray-100 rounded-md border-2 ${
                errors.firstName ? "border-red-500" : "border-gray-200"
              }`}
            >
              <input
                id="signup--first_name"
                className="outline-none w-full"
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                onBlur={() =>
                  setErrors({
                    ...errors,
                    firstName: validateFirstName(firstName),
                  })
                }
                required
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-xs pl-3">{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <label
              className="pl-3 text-sm cursor-pointer"
              htmlFor="signup--last_name"
            >
              Last Name
            </label>
            <div
              className={`w-full p-3 bg-gray-100 rounded-md border-2 ${
                errors.lastName ? "border-red-500" : "border-gray-200"
              }`}
            >
              <input
                id="signup--last_name"
                className="outline-none w-full"
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                onBlur={() =>
                  setErrors({ ...errors, lastName: validateLastName(lastName) })
                }
                required
              />
            </div>
            {errors.lastName && (
              <p className="text-red-500 text-xs pl-3">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="pl-3 text-sm cursor-pointer"
            htmlFor="signup--email"
          >
            Email
          </label>
          <div
            className={`w-full p-3 bg-gray-100 rounded-md border-2 ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
          >
            <input
              id="signup--email"
              className="outline-none w-full"
              type="email"
              placeholder="Enter Email"
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
          <label
            className="pl-3 text-sm cursor-pointer"
            htmlFor="signup--password"
          >
            Password
          </label>
          <div
            className={`flex items-center gap-3 w-full p-3 bg-gray-100 rounded-md border-2 ${
              errors.password ? "border-red-500" : "border-gray-200"
            }`}
          >
            <input
              id="signup--password"
              className="outline-none w-full"
              type={showPassword ? "text" : "password"}
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
