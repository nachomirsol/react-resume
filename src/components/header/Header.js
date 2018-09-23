import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="row header">
      <div className="col-md-6 logo">
        <img src ="https://auth.enable.jarowa.ch/img/logo.png" alt="logo"/>
      </div>
      <div className="col-md-6">
        <div className="text-right header-right">
          <p>
            <strong>Order Overview</strong>
            <i className="fas fa-angle-down"></i>
          </p>
          <small>Lawyer Lawyer</small>
        </div>
      </div>
    </div>
  );
};

export default Header;
