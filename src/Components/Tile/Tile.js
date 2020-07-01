import React, { Component } from "react";
import "./TileStyle.css";

export class Tile extends Component {
  render() {
    return (
      <div>
        <div />
        <button className="TileButton">Click Me!</button>
        <div />
        <a href="https://www.google.com">Link to Google</a>
      </div>
    );
  }
}

export default Tile;
