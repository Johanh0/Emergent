import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
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

        const userData = await response.json();

        setUser(userData);
      } catch (error) {
        setUser(null);
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
