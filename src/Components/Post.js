import { TextField } from "@mui/material";

import React, { useState } from "react";

function Post({ handleAdd }) {
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/Food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        food_name: food_name,
        location_id: location_id,
        review_id: review_id,
      })
        .then((r) => r.json())
        .then((data) => handleAdd(data)),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        size="small"
        helperText="Add Food"
        onChange={(e) => console.log(e.target.value)}
      />
      <TextField
        size="small"
        helperText="Add Location"
        onChange={(e) => console.log(e.target.value)}
      />
      <TextField
        size="small"
        helperText="Add Review"
        onChange={(e) => console.log(e.target.value)}
      />
      <TextField
        size="small"
        helperText="Add Your Rating"
        onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Post;
