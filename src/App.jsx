import React from "react";
import ReactDOM from "react-dom";
import TextInput from "react_mf/TextInput";
import DatePicker from './modules/DatePicker'
import "./index.css";

const App = () => (
  <div className="container">
    <TextInput variant="Filled" label="Micro Input" />
    <DatePicker />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
