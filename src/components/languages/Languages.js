import React from "react";
import "./Languages.css";
import { languages } from "../../data/data.json";

const Languages = props => {
  return (
    <div className="row languages">
      <div className="col-md-12">
        <h5>
          <strong>LANGUAGES</strong>
        </h5>

        
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Languages;
