import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/admin/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials: "include",
        }
      );

      navigate("/admin_auth");
    } catch (error) {}
  };
  return (
    <aside className="flex lg:flex-col justify-between w-full h-full rounded-2xl bg-bunker-950 text-white shadow-2xl p-10">
      <section className="flex justify-center">
        <h3 className=" text-lg text-center font-bold">User Management</h3>
      </section>

      {/* <section>
        <ul className="flex flex-col gap-5">
          <li>
            <Link to="/admin/users" className="flex gap-3 items-center">
              <FaUserAlt className="text-lg" />
              <p className="text-mf font-bold">User Managment</p>
            </Link>
          </li>
          <li>
            <Link to="/admin/profile" className="flex gap-3 items-center">
              <IoSettingsSharp className="text-lg" />
              <p className="text-mf font-bold">Profile Setting</p>
            </Link>
          </li>
        </ul>
      </section> */}

      <section
        onClick={handleLogout}
        className="flex gap-3 items-center cursor-pointer"
      >
        <HiOutlineLogout className=" text-2xl" />
        <p className="text-lg font-bold">Logout</p>
      </section>
    </aside>
  );
};

export default AdminNavbar;
