import { useState } from "react";
import UserLogin from "../components/auth/UserLogin";
import UserSignup from "../components/auth/UserSignup";

const UserAuth = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <section className="flex w-screen h-screen p-5 md:p-10 gap-10">
      <div className="relative flex justify-center items-center flex-col w-full h-full ">
        <div className="absolute top-0 left-0">back icon</div>
        {isLoginView ? (
          <UserLogin authView={() => setIsLoginView(!isLoginView)} />
        ) : (
          <UserSignup authView={() => setIsLoginView(!isLoginView)} />
        )}
      </div>
      <div className="hidden lg:block bg-blue-100 w-full h-full rounded-2xl"></div>
    </section>
  );
};

export default UserAuth;
