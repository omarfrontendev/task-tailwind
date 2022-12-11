import React from "react";
import { Tabel } from "../components";

const Users = () => {
  return (
    <div className="min-h-[calc(100%-60px)]">
      <h1 className="font-bold text-[50px] text-neutral-800 flex items-center gap-6 mb-10">
        <span className="w-6 h-6 rounded-full bg-main ring-8 ring-main/25" />
        Users
      </h1>
      <Tabel />
    </div>
  );
};

export default Users;
