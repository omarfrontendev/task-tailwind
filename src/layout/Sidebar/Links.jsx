import React from "react";

const Links = () => {
  return (
    <ul className="flex flex-col mt-5 gap-6">
      <li className="link">Products data</li>
      <li className="link">Brands & Branches</li>
      <li className="link">Customers</li>
      <li className="link">Products data</li>
      <li className="active-link">Users</li>
    </ul>
  );
};

export default Links;
