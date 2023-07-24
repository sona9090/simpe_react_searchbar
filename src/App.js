import "./styles.css";
import data from "./data.js";
import { useState } from "react";

export default function App() {
  const [searchVal, setSearchVal] = useState("");

  const changeHandler = (event) => setSearchVal(event.target.value);

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>Cat breeds</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchVal}
        onChange={(event) => changeHandler(event)}
      />
      <br />
      <br />
      <div id="result">
        {data
          .filter((item) => {
            return (
              searchVal !== "" &&
              item.toLowerCase().includes(searchVal.toLowerCase()) &&
              item
            );
          })
          .map((item) => (
            <div>{item}</div>
          ))}
      </div>
    </div>
  );
}
