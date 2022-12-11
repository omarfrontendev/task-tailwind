import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import BottomSidebar from "./BottomSidebar";
import Links from "./Links";
import Topsidebar from "./Topsidebar";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`relative shrink-0 ${
        open ? "w-64" : "w-0"
      } transition-all border-r border-neutral-300`}
    >
      <button
        className={`absolute top-[80px] right-0 w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-lg text-lg z-[100] ${
          open ? "translate-x-[50%] rotate-0" : "translate-x-[100%] rotate-180"
        }`}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <MdKeyboardArrowLeft className="text-main" />
      </button>
      {open && (
        <div className="px-5 py-3 flex flex-col w-64 fixed max-h-screen overflow-y-scroll custome-bar justify-between animate-slideleft top-0 left-0 h-screen">
          <div>
            <Topsidebar />
            <div className="pb-4 border-b w-full border-slate-500 font-medium text-sm">
              Home
            </div>
            <Links />
          </div>
          <BottomSidebar />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
