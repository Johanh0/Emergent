import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();

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
      } catch (error) {
        navigate("/auth");
        throw new Error(error);
      }
    };

    isUserLoggedIn();
  }, []);
  return <div>Profile</div>;
};

export default Profile;
