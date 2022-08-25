import React, { useState, useEffect } from "react";
import Post from "./Components/Post";
// import Read from "./Components/Read";

function App() {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/Food")
      .then((r) => r.json(0))
      .then((data) => {
        // setScale(scaleData);
        setGetData(data);
      });
  }, []);
  console.log(getData);
  return (
    <div>
      <header></header>
    </div>
  );
}

export default App;
