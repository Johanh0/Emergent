import { useState, useEffect, useContext } from "react";
<<<<<<< HEAD
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
        className="relative flex flex-col justify-center items-center bg-white p-5 lg:p-16 rounded-lg shadow-lg w-full max-w-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-start w-full mb-10 lg:mb-10 lg:absolute top-5 left-5">
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
=======
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import UserLogin from "../components/auth/UserLogin";
import UserSignup from "../components/auth/UserSignup";
import { FaArrowLeft } from "react-icons/fa";
import tornadoImg from "../assets/tornado.jpg";

const UserAuth = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  // useState to handle if it's in login view or not
  const [isLoginView, setIsLoginView] = useState(true);

  // Check if the user is already logged in
  useEffect(() => {
    const isUserLoggedIn = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/user/profile",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("User is not logged in");
        }

        navigate("/profile");
      } catch (error) {
        throw new Error(error);
      }
    };

    isUserLoggedIn();
  }, []);
  return (
    <section className="flex w-screen h-screen p-5 md:p-10 gap-10">
      <div className="relative flex justify-center items-center flex-col w-full h-full ">
        <div className="absolute top-0 left-0">
          <Link to="/">
            <FaArrowLeft className="bg-bunker-100 w-10 h-10 p-3 rounded-full text-bunker-950 cursor-pointer" />
          </Link>
        </div>
        {isLoginView ? (
          <UserLogin authView={() => setIsLoginView(!isLoginView)} />
        ) : (
          <UserSignup authView={() => setIsLoginView(!isLoginView)} />
        )}
      </div>
      <div className="hidden lg:block w-full h-full ">
        <img
          src={tornadoImg}
          alt="Storm with ligthing in the clouds imagen"
          className="w-full h-full object-cover rounded-2xl"
>>>>>>> main
        />
      </div>
    </section>
  );
};

export default UserAuth;
