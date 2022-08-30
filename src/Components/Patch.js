import { Add } from "@mui/icons-material";
import {
  TableRow,
  TableCell,
  TextField,
  Rating,
  IconButton,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react";

function Patch({ setIsEdit, id, updateData }) {
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");
  const [review, setReview] = useState("");
  const [scale, setScale] = useState(0);
  const [rname, setRName] = useState("");

  const handleUpdate = (e) => {
    setIsEdit(false);
    e.preventDefault();
    fetch(`http://localhost:9292/Food/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        food_name: food,
        location: location,
        r_name: rname,
        review: review,
        scale: scale,
        city_id: 0,
        frequent_id: 0,
      }),
    })
      .then((r) => r.json())
      .then((data) => updateData(data));
  };
  return (
    <>
      <TableCell>
        <TextField
          size="small"
          helperText="Add Food"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        ></TextField>
      </TableCell>

      <TableCell>
        <TextField
          type="text"
          size="small"
          helperText="Add URL"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          size="small"
          helperText="Restauraunt Name"
          value={rname}
          onChange={(e) => setRName(e.target.value)}
        ></TextField>
      </TableCell>

      <TableCell>
        <TextField
          type="comment"
          size="large"
          helperText="Add Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></TextField>
      </TableCell>
      <TableCell>
        <Rating
          size="medium"
          align="bottom"
          value={scale.to_int}
          onChange={(e) => setScale(e.target.value)}
        ></Rating>
      </TableCell>
      <TableCell>
        <ToggleButton onClick={handleUpdate}>
          <Add />
        </ToggleButton>
      </TableCell>
    </>
  );
}

export default Patch;
