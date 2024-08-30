export default ({ nameButton, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#1A1A1A] py-3 w-32 rounded-lg text-white font-bold  hover:bg-gray-400"
    >
      {nameButton}
    </button>
  );
};
