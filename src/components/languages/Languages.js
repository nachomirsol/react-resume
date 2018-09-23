import React from "react";
import "./Languages.css";
import Language from "./Language";
import { languages } from "../../data/data.json";

const Languages = () => {

  return (
    <div className="row languages">
      <div className="col-md-12">
        <h5>
          <strong>LANGUAGES</strong>
        </h5>
        <div className="row">
          {
            languages.map((item, index) => (
              <Language
                key = {index}
                name={item.name}
                lines={item.lines}
                level={item.level}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
  
}

export default Languages;