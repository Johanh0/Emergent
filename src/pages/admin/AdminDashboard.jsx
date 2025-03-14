import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AdminNavbar from "../../components/admin/AdminNavbar";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedIn = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/admin/profile",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Admin is not logged in");
        }
      } catch (error) {
        navigate("/admin_auth");
        throw new Error(error);
      }
    };

    isAdminLoggedIn();
  }, []);
  return (
    <>
      <main className="flex flex-col lg:flex-row gap-15 p-5 w-screen h-screen">
        <section className="w-fill  lg:w-1/6">
          <AdminNavbar />
        </section>

        <section className="w-full">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
