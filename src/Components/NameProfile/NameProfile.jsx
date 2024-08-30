import { useState } from "react";

export default ({ nameProfile }) => {
  const [followText, setFollowText] = useState("Follow");

  function handleClick() {
    alert("Você agora está seguindo");
    setFollowText("Following");
  }
  return (
    <div className="flex pr-5 py-2 border-b-2 border-blue-500">
      <h2 className="text-black font-bold text-2xl text-center">
        {nameProfile}
      </h2>
      <button
        onClick={handleClick}
        className=" w-24 bg-[#428CD1] rounded-2xl text-center cursor-pointer  text-white hover:bg-cyan-500"
      >
        {followText}
      </button>
      <br />
    </div>
  );
};
