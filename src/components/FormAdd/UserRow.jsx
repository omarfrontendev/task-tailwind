import React from "react";
import { AiFillDelete } from "react-icons/ai";

const UserRow = ({ i, sources }) => {
  return (
    <div className="relative flex w-full px-10 animate-slideup">
      <span className="absolute left-0 top-[50%] translate-y-[-50%] bg-red-100 w-7 border border-main rounded-sm text-main text-sm h-[54px] flex items-center justify-center">
        {i}
      </span>
      <div className="flex gap-2 w-full">
        {sources?.map((input) => (
          <div
            key={input.id}
            className="border rounded-md border-neutral-300 flex h-[54px] items-center basis-[20%] first-of-type:basis-[30%] last-of-type:basis-[30%]"
          >
            <span className="h-full w-10 flex items-center justify-center bg-sky-200 mr-4 text-xl">
              {input.icon}
            </span>
            <input
              className="outline-none w-full"
              type={input.type}
              placeholder={input.placeholder}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-[50%] translate-y-[-50%] flex justify-center items-center border border-red-600 text-red-600 rounded-md text-xl p-1"
        type="button"
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

export default UserRow;
