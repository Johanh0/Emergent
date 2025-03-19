import { useState, useEffect } from "react";
import UserSearch from "../../components/admin/UserSearch";
import UserCard from "../../components/admin/UserCard";
import DeleteConfirmationModal from "../../components/admin/DeleteConfirmationModal";

const AdminUsers = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const [userSelected, setUserSelected] = useState(null);

  const onSearch = async (searchTerm, searchType) => {
    try {
      const response = await fetch(
        `/api/v1/admin/search_user?searchTerm=${encodeURIComponent(
          searchTerm
        )}&searchType=${encodeURIComponent(searchType)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to get the user");
      }

      const data = await response.json();
      setSearchResult(data);
    } catch (error) {}
  };

  const onDeleteClick = (user) => {
    setUserSelected(user);
    setIsOpen(true);
  };

  const onConfirm = async () => {
    try {
      const { id, email } = userSelected;
      const response = await fetch("/api/v1/admin/delete_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, email }),
        mode: "cors",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to delete user");
      }

      const result = await response.json();

      setSearchResult(result);
    } catch (error) {}
    setIsOpen(null);
  };

  useEffect(() => {
    const searchAllUsers = async () => {
      try {
        const response = await fetch("/api/v1/admin/all_users", {
          credentials: "include",
        });

        if (!response.ok) {
        }

        const data = await response.json();
        console.log(data);
        setSearchResult(data);
      } catch (error) {}
    };

    searchAllUsers();
  }, []);

  return (
    <section className="flex flex-col gap-10 w-full h-full ">
      <UserSearch onSearch={onSearch} />

      <div className="flex justify-center flex-wrap gap-5">
        {searchResult?.map((user) => (
          <UserCard
            onDeleteClick={() => onDeleteClick(user)}
            key={user.id}
            user={user}
          />
        ))}
      </div>

      <DeleteConfirmationModal
        onConfirm={onConfirm}
        user={userSelected}
        isOpen={isOpen}
        onClose={() => setIsOpen(null)}
      />
    </section>
  );
};

export default AdminUsers;
