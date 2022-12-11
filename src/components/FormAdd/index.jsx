import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaKey, FaBox } from "react-icons/fa";
import UserRow from "./UserRow";

const FormAdd = () => {
  const header = [
    {
      title: "Email",
      subtitle: "type this user's email. to add and contact later",
      width: 30,
    },
    {
      title: "JobTitle",
      subtitle: "type this user's job title",
      width: 20,
    },
    {
      title: "Code",
      subtitle: "type this user's code",
      width: 20,
    },
    {
      title: "Authorizedmodule",
      subtitle: "which iframodern module this user's authorized to use?",
      width: 30,
    },
  ];
  const inputs = [
    {
      id: "email",
      type: "email",
      placeholder: "Example@gmail.com",
      icon: <MdEmail />,
    },
    {
      id: "jobTitle",
      type: "text",
      placeholder: "CFO, Acountant.etc",
      icon: <AiOutlineUser />,
    },
    {
      id: "code",
      type: "text",
      placeholder: "#0000000000",
      icon: <FaKey />,
    },
    {
      id: "Authorizedmodule",
      type: "number",
      placeholder: "",
      icon: <FaBox />,
    },
  ];

  const userInputs = {
    id: 1,
    inputs,
  };
  const [newInputs, setNewInputs] = useState([userInputs]);

  const andNewInputs = () => {
    setNewInputs((prev) => [...prev, { id: Math.random(), inputs }]);
  };

  return (
    <form className="flex-1">
      <div className="p-4">
        <div className="flex rounded-md bg-slate-200 px-10 gap-2">
          {header.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col py-3 basis-[20%] first-of-type:basis-[30%] last-of-type:basis-[30%]`}
            >
              <div className="flex-1  text-sm font-medium mb-2">
                {item.title}
              </div>
              <p className="text-[12px]  text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-2 w-full h-[350px] overflow-y-scroll custome-bar-form">
          {newInputs.map((item, i) => (
            <UserRow i={i} key={i} id={item.id} sources={item.inputs} />
          ))}
        </div>
      </div>
      <div className="px-4 py-6 flex justify-between items-center border border-t-neutral-300">
        <button
          className="text-main bg-pink-100 py-2 px-6 font-medium text-sm rounded-md"
          type="button"
          onClick={andNewInputs}
        >
          Add new user input
        </button>
        <div className="flex items-center justify-end gap-2">
          <button
            className="text-main py-2 px-12 font-medium text-sm rounded-md border border-main box-border"
            type="button"
          >
            Cancel
          </button>
          <button
            className="text-white bg-blue-300 py-2 px-12 font-medium text-sm rounded-md"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormAdd;
