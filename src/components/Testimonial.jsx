const Testimonial = ({ avatar, text, name }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full mb-4" />
      <p className="text-neutral-600 mb-4">"{text}"</p>
      <p className="text-neutral-600 mb-4">{name}</p>
    </div>
  );
};

export default Testimonial;
