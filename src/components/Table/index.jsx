import React, { useState } from "react";
import { users } from "../../data";
import { Table } from "antd";
import { PopUp, FormAdd, TableHeader } from "../";
import "./tabel.css";

const Tabel = () => {
  const [data, setData] = useState(users);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [openForm, setopenForm] = useState(false);

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      align: "center",
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      editTable: true,
      render: (name) => (
        <div className="flex items-center gap-2">
          <img
            src={
              "data:image/jpeg;base64,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"
            }
            alt=""
            className="rounded-full w-8 h-8 "
          />
          <span className="truncate w-full">{name}</span>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "mobileNumber",
      dataIndex: "mobileNumber",
      align: "center",
      editTable: true,
      sorter: (a, b) => a.mobileNumber - b.mobileNumber,
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      editTable: true,
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: "jobTitle",
      dataIndex: "jobTitle",
      align: "center",
      editTable: true,
      sorter: true,
    },
    {
      title: "Authorizedmodule",
      dataIndex: "Authorizedmodule",
      align: "center",
      editTable: true,
      sorter: (a, b) => a.Authorizedmodule - b.Authorizedmodule,
    },
    {
      title: "joining date",
      dataIndex: "date",
      align: "center",
      editTable: true,
      sorter: (a, b) => a.date - b.date,
    },
    {
      title: "",
      dataIndex: "",
      align: "center",
      editTable: true,
      render: () => (
        <button className="flex items-center justify-end gap-[1px]">
          {Array(3)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="w-[5px] h-[5px] rounded-full border border-black"
              ></div>
            ))}
        </button>
      ),
    },
  ];
  const modifiedData = data.map(({ body, ...item }, i) => ({
    ...item,
    key: i,
    message: body,
  }));

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <TableHeader onOpen={setopenForm} />
      <Table
        dataSource={modifiedData}
        className="table"
        columns={columns}
        pagination={{
          className: "pagination",
          pageSize: 5,
        }}
        rowSelection={rowSelection}
        rowClassName="text-sm font-medium"
      />
      {openForm && (
        <PopUp onClose={setopenForm}>
          <FormAdd />
        </PopUp>
      )}
    </>
  );
};

export default Tabel;
