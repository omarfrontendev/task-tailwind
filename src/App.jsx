import React from "react";
import { Sidebar, Header } from "./layout";
import { Users } from "./Pages";
import "./index.css";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full min-h-screen bg-white">
        <Header />
        <div className="px-6 py-10 animate-slideup">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default App;
