import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import UserSearchBox from "./components/UserSearchBox";

function App() {
  return (
    <div className="App">
      <UserSearchBox />
    </div>
  );
}

export default App;
