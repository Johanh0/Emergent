import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="w-full h-full flex justify-center items-center flex-col gap-10">
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-9xl text-[#161128]">404</h1>
        <p className="text-4xl text-gray-400">Page Not Found!</p>
      </div>
      <Link to={"/"}>
        <p className="text-lg p-3 bg-[#161128] rounded-md text-white">
          Go Back Home
        </p>
      </Link>
    </section>
  );
};

export default NotFound;
