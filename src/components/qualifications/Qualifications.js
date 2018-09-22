import React from "react";
import "./Qualifications.css";
import { qualifications } from "../../data/data.json";

const Qualifications = () => {
  return (
    <div className="row qualifications">
      <div className="col-md-12">
        <div className="row">
          <h5>
            <strong>QUALIFICATIONS</strong>
          </h5>
        </div>

        <div className="row rows">
          <div className="col-md-5">
            <span className="title"> Lawyer's licence</span>
          </div>
          <div className="col-md-7">
            <span>{qualifications.lawyers_licence}</span>
          </div>
        </div>

        <div className="row rows">
          <div className="col-md-5">
            <span className="title"> Year of licence</span>
          </div>
          <div className="col-md-7">
            <span>{qualifications.year_of_licence}</span>
          </div>
        </div>

        <div className="row rows">
          <div className="col-md-5">
            <span className="title"> QUALIFICATION</span>
          </div>
          <div className="col-md-7">
            {qualifications.qualifications.map(element => {
              return <p>{element}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
