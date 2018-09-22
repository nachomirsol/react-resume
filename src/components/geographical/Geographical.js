import React from "react";
import "./Geographical.css";
import { geographical_cover } from "../../data/data.json";

const Geographical = () => {
  return (
    <div className="row qualifications">
      <div className="col-md-12">
        <div className="row">
          <h5>
            <strong>GEOGRAPHICAL COVER</strong>
          </h5>
        </div>

        <div className="row rows">
          <div className="col-md-5">
            <span className="title"> Geographical cover:</span>
          </div>
          <div className="col-md-7">
            {Object.keys(geographical_cover).map((key, index) => (
              <p key={index}>{geographical_cover[key]}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geographical;
