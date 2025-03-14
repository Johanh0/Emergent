const Submit = ({ valueContent }) => {
  return (
    <input
      className="w-full bg-bunker-950 text-white font-bold p-3 rounded-md cursor-pointer"
      type="submit"
      value={valueContent}
    />
  );
};

export default Submit;
