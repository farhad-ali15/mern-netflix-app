import "./userList.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@mui/icons-material";

import { Link } from "react-router-dom";

import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { deleteUser, getUsers } from "../../context/userContext/UserApiCalls";

function UserList() {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Username",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 160 },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 90,
    },

    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`} state={{ some: params.row }}>
              <button className="userListEdit">Edit</button>
            </Link>
            <Delete
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}

export default UserList;
