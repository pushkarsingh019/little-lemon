const Button = ({ children }) => {
  return (
    <button className="py-3 px-7 bg-yellow-color text-lg rounded-2xl text-black-color font-semibold">
      {children}
    </button>
  );
};

export default Button;
