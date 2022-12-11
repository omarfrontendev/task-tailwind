import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const TableHeader = ({ onOpen }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center border border-neutral-400 rounded-md h-[54px] pl-2">
        <div className="flex items-center ">
          <BiSearchAlt2 size={25} className=" text-neutral-400 mr-2" />
          <input
            type="text"
            placeholder="Can i help you?"
            className="w-full h-full outline-none min-w-[300px]"
          />
          <button className="text-main px-3 h-[54px] border-l border-neutral-300">
            Code
          </button>
        </div>
      </div>
      <div className="flex justify-end items-center text-sm">
        <button className="px-4 h-[34px] text-main font-medium border border-main rounded-full">
          Filters
        </button>
        <button className="flex-1 h-[34px] w-[34px] border border-main rounded-full flex items-center justify-center gap-[2px] mx-3">
          {Array(3)
            .fill(" ")
            .map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 rounded-full border border-main"
              ></span>
            ))}
        </button>
        <button
          className="px-4 h-[34px] text-white bg-main font-medium rounded-full"
          onClick={() => onOpen(true)}
        >
          Add New Brand
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
