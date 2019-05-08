import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Mentor from "./User";
import LeadMentor from "./LeadMentor";
import Queue from "./Queue";

function App() {
  return (
    <div className="App">
      {/* <Mentor title="Lead Mentor" />
      <Mentor title="mentor" /> */}
      {/* <LeadMentor title="evan " /> */}
      <Queue />
    </div>
  );
}

export default App;
