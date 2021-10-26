import "./App.css";
import React, { useEffect } from "react";
import { InitScene } from "./scene";

function App() {
  useEffect(() => {
    InitScene();
  });
  return (
    <div className="App">
      <h1 className="centered">Hello cube with Three.js!</h1>
    </div>
  );
}

export default App;
