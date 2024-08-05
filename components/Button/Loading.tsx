import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex mt-24 justify-center items-center">
      <AiOutlineLoading className="animate-spin" size={64} />
    </div>
  );
};

export default Loading;
