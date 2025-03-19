import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { FaArrowLeft } from "react-icons/fa";
import Lottie from "lottie-react";
import signupAnimation from "../assets/signup.json";
import { motion } from "framer-motion";
import UserSignup from "../components/auth/UserSignup";
import UserLogin from "../components/auth/UserLogin";

const UserAuth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");
  console.log(view);
  const { user } = useContext(UserContext);
  const [isLoginView, setIsLoginView] = useState(() => {
    if (view) {
      switch (view) {
        case "sign-in":
          return true;
          break;

        case "sign-up":
          return false;
          break;
      }

      return;
    }

    return true;
  });

  useEffect(() => {
    const isUserLoggedIn = async () => {
      try {
        const response = await fetch("/api/v1/user/profile", {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("User is not logged in");
        }
        navigate("/profile");
      } catch (error) {
        console.error(error);
      }
    };
    isUserLoggedIn();
  }, []);

  useEffect(() => {
    const checkView = () => {};

    checkView();
  }, []);

  return (
    <section className="absolute top-0 left-0 flex w-screen h-screen p-5 md:p-10 gap-16 bg-gradient-to-r from-purple-600 to-indigo-700 justify-center items-center">
      {/* Left Side: Enlarged User Login/Signup Form */}
      <motion.div
        className="relative flex flex-col justify-center items-center bg-white p-16 rounded-lg shadow-lg w-full max-w-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-5 left-5">
          <Link to="/">
            <FaArrowLeft className="bg-bunker-100 w-12 h-12 p-3 rounded-full text-bunker-950 cursor-pointer" />
          </Link>
        </div>
        {isLoginView ? (
          <UserLogin authView={() => setIsLoginView(false)} />
        ) : (
          <UserSignup authView={() => setIsLoginView(true)} />
        )}
      </motion.div>

      {/* Right Side: Enlarged Lottie Animation to Match Form Size */}
      <div className="hidden lg:flex justify-center items-center w-full max-w-4xl">
        <Lottie
          animationData={signupAnimation}
          loop={true}
          className="w-full max-w-4xl h-auto"
        />
      </div>
    </section>
  );
};

export default UserAuth;
