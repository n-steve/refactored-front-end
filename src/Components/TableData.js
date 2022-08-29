import { Rating, TableCell, TableRow, IconButton } from "@mui/material";
import React from "react";
import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

function TableData({ apiData, id, deleteData, updateData }) {
  const handleDelete = () => {
    fetch(`http://localhost:9292/Food/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        return deleteData(data);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/Food/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        food_name: apiData.food_name,
        location: apiData.location,
        r_name: apiData.r_name,
        review: apiData.review,
        scale: apiData.scale,
        city_id: 0,
        frequent_id: 0,
      }),
    })
      .then((r) => r.json())
      .then((data) => updateData(data));
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.open();
  };

  return (
    <>
      <TableRow>
        <TableCell id="food">{apiData.food_name}</TableCell>
        <TableCell onClick={handleClick}>
          <a href={apiData.location}>{apiData.r_name}</a>
        </TableCell>
        <TableCell id="review">{apiData.review}</TableCell>
        <TableCell id="rating">
          <Rating value={apiData.scale} />
        </TableCell>
        <TableCell>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
          <IconButton onClick={(e) => handleUpdate(e)}>
            <EditIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TableData;
