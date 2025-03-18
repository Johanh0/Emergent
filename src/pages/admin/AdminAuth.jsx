import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "../../components/auth/AdminLogin";

const adminAuth = () => {
  const navigate = useNavigate();
  // Check if the admin is already logged in
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

        navigate("/admin/dashboard");
      } catch (error) {
        throw new Error(error);
      }
    };

    isAdminLoggedIn();
  }, []);
  return (
    <section className="absolute top-0 left-0 flex justify-center items-center w-full h-screen">
      <AdminLogin />
    </section>
  );
};

export default adminAuth;
