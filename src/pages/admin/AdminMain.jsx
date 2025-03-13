const AdminMain = () => {
  return (
    <section>
      <div className="flex gap-10 w-full h-fit">
        <div className="flex items-center flex-1 bg-gray-100 text-black p-5 rounded-lg">
          <h1 className=" text-4xl">Dashboard Administrator</h1>
        </div>

        <div className="flex flex-col justify-center gap-2 w-1/3 bg-bunker-100 p-5 text-center rounded-lg">
          <h2 className=" font-bold text-md">USERS</h2>
          <p className="text-5xl">3</p>
        </div>
      </div>
    </section>
  );
};

export default AdminMain;
