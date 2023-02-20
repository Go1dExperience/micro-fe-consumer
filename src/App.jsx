import React from 'react'
import ReactDOM from "react-dom";
import TextMaxline from 'react/TextMaxline'

import "./index.css";

const App = () => (
  <div className="container">
    <TextMaxline variant="subtitle1" line={1}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus mollitia deleniti quis voluptate eos sit totam facere sint magnam illum laboriosam perferendis dolorem, nam aspernatur sed expedita, tenetur libero delectus.
    </TextMaxline>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
