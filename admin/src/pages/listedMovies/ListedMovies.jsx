import "./listedMovies.css";

import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/ListApiCalls";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

export default function ListedMovies() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/list/${params.row._id}`} state={{ list: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableRowSelectionOnClick
        columns={columns}
        pagination
        paginationModel={{ page: 0, pageSize: 8 }}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
