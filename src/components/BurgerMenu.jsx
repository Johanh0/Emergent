import { Link } from "react-router-dom";

const BurgerMenu = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "absolute" : "hidden"
      } lg:hidden right-0 bg-gray-100 px-4 py-3 rounded-lg min-w-[150px]`}
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
        <li>
          <Link to={"/"}>
            <p>Account</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
