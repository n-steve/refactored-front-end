import {
  Rating,
  TableCell,
  TableRow,
  IconButton,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import Patch from "./Patch";
import { Add } from "@mui/icons-material";
import Post from "./Post";
function TableData({ apiData, id, deleteData, updateData }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
    fetch(`http://localhost:9292/Food/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        return deleteData(data);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.open(apiData.location);
  };

  return (
    <TableRow>
      {isEdit ? (
        <Patch setIsEdit={setIsEdit} updateData={updateData} id={id} />
      ) : (
        <>
          <TableCell id="food">{apiData.food_name}</TableCell>
          <TableCell onClick={handleClick}>
            <a href={apiData.location}>{apiData.r_name}</a>
          </TableCell>
          <TableCell id="review">{apiData.review}</TableCell>
          <TableCell id="rating">
            <Rating value={apiData.scale} />
          </TableCell>
        </>
      )}

      <TableCell>
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
        <IconButton onClick={handleEdit}>
          {!isEdit ? <EditIcon /> : null}
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default TableData;
