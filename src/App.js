import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Read from "./Components/Read";
import Post from "./Components/Post";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/Food")
      .then((r) => r.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const deleteData = (removeData) => {
    const updateData = data.filter((i) => i.id !== removeData.id);
    setData(updateData);
  };

  const updateData = (updatedData) => {
    const update = data.map((i) => (i.id === updatedData.id ? updatedData : i));
    setData(update);
  };
  return (
    <div>
      <Box
        sx={{
          color: "text.primary",
          textAlign: "center",
          fontWeight: "medium",
          boxShadow: 1,
          margin: 10,
        }}
      >
        <header>Personal Food List</header>
        <Post addData={addData} />

        <Read
          data={data}
          deleteData={deleteData}
          setData={setData}
          updateData={updateData}
        />
      </Box>
    </div>
  );
}

export default App;
