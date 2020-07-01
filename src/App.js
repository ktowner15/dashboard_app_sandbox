import React from "react";
import Tile from "./Components/Tile/Tile";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Beginning of App component</h1>

      <Tile name="Click" link="./Resource.html" />

      <h2>End of App component</h2>
    </div>
  );
}
