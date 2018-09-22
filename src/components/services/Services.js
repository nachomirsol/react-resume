import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="col-md-5 services">
      <h3>
        <strong>Services</strong>
      </h3>

      <div className="row">
        <div className="col-md-12">
          <h5>
            <strong>Construction and Real Estate Law</strong>
          </h5>

          <div className="row titleservice">
            <div className="col-md-8 ">
              <strong>Builders' lien law</strong>
            </div>
            <div className="col-md-4 text-right">
              <strong>Hide ∧</strong>
            </div>
          </div>

          <div className="row grey">
            <div className="col-md-7 ">
              <strong>Fee</strong>
            </div>
            <div className="col-md-5 text-right">
              <strong>35 CHF per hour</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
