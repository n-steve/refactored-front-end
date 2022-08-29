import { Rating, TextField, Button } from "@mui/material";

import React, { useState } from "react";

function Post({ addData }) {
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");
  const [review, setReview] = useState("");
  const [scale, setScale] = useState(0);
  const [rname, setRName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/Food", {
      method: "POST",
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
      .then((data) => addData(data));
  }

  return (
    <form>
      <TextField
        type="text"
        size="small"
        helperText="Add Food"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <TextField
        type="text"
        size="small"
        helperText="Add URL"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        type="text"
        size="small"
        helperText="Restauraunt Name"
        value={rname}
        onChange={(e) => setRName(e.target.value)}
      />

      <TextField
        type="text"
        size="extra large"
        helperText="Add Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <div>
        <Rating
          size="medium"
          align="bottom"
          value={scale.to_int}
          onChange={(e) => setScale(e.target.value)}
        />
        <div>
          {" "}
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </form>
  );
}

export default Post;
