import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const PopUp = ({ onClose, title, children }) => {
  return (
    <div className="fixed inset-0 bg-indigo-300/70 z-10 grid place-items-center">
      <div className="w-[95%] max-w-full bg-white rounded-md flex flex-col">
        <div className="flex items-center justify-between p-4 border border-b-gray-400">
          {title || "Title"}
          <button onClick={() => onClose(false)}>
            <IoCloseSharp />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
