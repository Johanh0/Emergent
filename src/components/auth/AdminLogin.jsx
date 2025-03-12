import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Submit from "./Submit";
import { RiAdminFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        mode: "cors",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to login");
      }

      const data = await response.json();
      navigate("/admin_profile");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form
      onSubmit={(event) => handleLogin(event)}
      className="flex flex-col gap-7 h-fit bg-gray-50 p-5 rounded-md"
      action=""
    >
      <div className="flex gap-3 w-full bg-gray-100 rounded-md">
        <div className="bg-gray-200 p-3 rounded-l-md">
          <RiAdminFill />
        </div>
        <input
          className="w-full mr-3 outline-none"
          type="email"
          placeholder="Enter email"
          onInput={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="flex gap-3 w-full bg-gray-100 rounded-md">
        <div className="bg-gray-200 p-3 rounded-l-md">
          <RiLockPasswordFill />
        </div>
        <input
          className="w-full mr-3 outline-none"
          type="password"
          placeholder="Enter password"
          onInput={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <Submit />
      </div>
    </form>
  );
};

export default AdminLogin;
