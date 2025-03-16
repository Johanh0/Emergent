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

      <div className=" ">
        <AdminUserOverview users={users} />
      </div>
    </section>
  );
};

export default AdminMain;
