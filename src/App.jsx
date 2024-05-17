import React from "react";
import Heros from "./components/Heros";
import "./index.css";
const App = () => {
  return (
    <div className="container">
      <h2 className="heading">Jujutsu Kaisen</h2>
      <Heros />
    </div>
  );
};

export default App;
