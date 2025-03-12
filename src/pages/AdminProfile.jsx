import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
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

  return <div>AdminProfile</div>;
};

export default AdminProfile;
