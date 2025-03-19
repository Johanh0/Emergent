import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const BurgerMenu = ({ isOpen }) => {
  const { user } = useContext(UserContext);
  return (
    <div
      className={`${
        isOpen ? "absolute" : "hidden"
      } lg:hidden right-0 top-12 bg-gray-100 px-4 py-3 rounded-lg min-w-[150px]`}
    >
      <ul className="flex flex-col items-end gap-2">
        <li>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/find-help"}>
            <p>Find Help</p>
          </Link>
        </li>
        <li>
          <Link to={"/volunteer"}>
            <p>Volunteer</p>
          </Link>
        </li>
        <li>
          <Link to={"/resources"}>
            <p>Resources</p>
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            <p>Contact</p>
          </Link>
        </li>
        {user ? (
          <li>
            <Link to={"/profile"}>
              <p>Account</p>
            </Link>
          </li>
        ) : (
          <>
            <Link to={"/auth?view=sign-in"}>
              <p>Sign in</p>
            </Link>

            <Link to={"/auth?view=sign-up"}>
              <p>Sign up</p>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default BurgerMenu;
