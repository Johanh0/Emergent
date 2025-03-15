import { useEffect, useState } from "react";
import AdminDonationsView from "../../components/admin/AdminDonationsView";
import AdminUserOverview from "../../components/admin/AdminUserOverview";
const AdminMain = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/admin/all_users",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {}
    };
    fetchUsers();
  }, []);
  return (
    <section className="flex h-full flex-col gap-10">
      <div className="w-full h-fit">
        <AdminDonationsView />
      </div>
      {/* <div className="flex gap-10 w-full h-fit">
        <div className="flex  justify-start items-center flex-1 bg-gray-100 text-black p-5 rounded-lg">
          <h3 className="font-bold text-2xl">Admin Dashboard</h3>
        </div>

        <div className="flex flex-col justify-center gap-2 w-1/3 bg-bunker-100 p-5 text-center rounded-lg">
          <h2 className=" font-bold text-md">USERS</h2>
          <p className="text-5xl">{users?.length}</p>
        </div>
      </div> */}

      <div className=" ">
        <AdminUserOverview users={users} />
      </div>
    </section>
  );
};

export default AdminMain;
