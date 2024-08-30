export default ({ socialNetwork, href }) => {
  return (
    <a
      className="font-bold bg-[#428CD1] bottom-10 rounded-2xl w-36 py-3 text-center cursor-pointer text-white hover:bg-cyan-500"
      href={href}
    >
      {socialNetwork}
    </a>
  );
};
