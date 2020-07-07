import React from "react";
import "./App.css";
import Ipad from "./components/Ipad/Ipad";

function App() {
  return (
    <div className="App">
      <h1>Music app</h1>
      <div className="ipad-section">
        <Ipad />
      </div>
    </div>
  );
}

export default App;
