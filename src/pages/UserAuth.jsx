import { useState, useEffect, useContext } from "react";
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
        />
      </div>
    </section>
  );
};

export default UserAuth;
