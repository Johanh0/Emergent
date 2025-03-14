import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

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
        <h3 className=" text-2xl text-center font-bold">Capstone</h3>
      </section>

      <section>
        <ul className="flex flex-row lg:flex-col gap-10 lg:gap-5">
          <li>
            <Link to="/admin/dashboard" className="flex gap-5 items-center">
              <TbLayoutDashboardFilled className="text-3xl lg:text-md" />
              <p className="hidden lg:block text-md font-bold">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="flex gap-5 items-center">
              <FaUserAlt className="text-3xl lg:text-md" />
              <p className="hidden lg:block text-md font-bold">Users</p>
            </Link>
          </li>
          <li>
            <Link to="/admin/messages" className="flex gap-5 items-center">
              <MdMarkEmailUnread className="text-3xl lg:text-md" />
              <p className="hidden lg:block text-md font-bold">Messages</p>
            </Link>
          </li>
        </ul>
      </section>

      <section
        onClick={handleLogout}
        className="flex gap-3 items-center cursor-pointer"
      >
        <HiOutlineLogout className=" text-3xl lg:text-2xl" />
        <p className="hidden lg:block text-lg font-bold">Logout</p>
      </section>
    </aside>
  );
};

export default AdminNavbar;
