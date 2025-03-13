import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

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
  return (
    <>
      <Header />
      <div className=" flex items-center justify-center p-4">
        <div className="bg-gray-50 rounded-lg shadow-md w-full max-w-md">
          <div className="bg-bunker-950 p-6 rounded-t-lg">
            <h1 className="text-2xl font-bold text-center text-white">
              Perfil de Usuario
            </h1>
          </div>

          <div className="p-6">
            {/* Avatar y cabecera */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-3xl text-gray-600">
                  {user?.firstName.charAt(0)}
                </span>
              </div>
            </div>

            {/* READ: Modo visualización */}
            {!isEditing ? (
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Name</span>
                  <span className="font-medium text-gray-800">
                    {user?.firstName}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Email</span>
                  <span className="font-medium text-gray-800">
                    {user?.email}
                  </span>
                </div>

                {/* Botones de acción para READ y DELETE */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={toggleEditMode}
                    className="flex-1 bg-bunker-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Editar Perfil
                  </button>
                  <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Eliminar Cuenta
                  </button>
                </div>
              </div>
            ) : (
              /* UPDATE: Modo edición (CREATE usa la misma estructura) */
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    defaultValue={user?.firstName}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-500" htmlFor="email">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue={user?.email}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Botones para guardar o cancelar edición */}
                <div className="flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    type="button"
                    onClick={toggleEditMode}
                    className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            {/* Botón de cierre de sesión siempre visible */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="w-full bg-bunker-950 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
