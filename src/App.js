import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* HEADER JAROWA PART*/}
          <Header />
          {/* PROFILE HEADER PART*/}
          <Profile />

          {/* PERSONAL INFO AND SERVICES PART*/}
          <div className="row">
            {/* PERSONAL INFO PART*/}

            {/* CONTACT INFO PART*/}
            <div className="col-md-7">
              left
              <div className="row">
                <div className="col-md-7">CONTACT INFO</div>
              </div>
              {/* LANGUAGES PART*/}
              <div className="row">
                <div className="col-md-7">LANGUAGES</div>
              </div>
              {/* QUALIFICATIONS PART*/}
              <div className="row">
                <div className="col-md-7">QUALIFICATIONS</div>
              </div>
              {/* GEOGRAPHICAL PART*/}
              <div className="row">
                <div className="col-md-7">GEOGRAPHICAL COVER</div>
              </div>
              {/* GEOGRAPHICAL PART*/}
              <div className="row">
                <div className="col-md-7">BANK ACCOUNT</div>
              </div>
            </div>

            {/* SERVICES PART*/}
            <div className="col-md-5">right</div>
          </div>
          {/* FOOTER PART*/}
          <div className="row">
            <div className="col-md-6">Copyright © 2018 JAROWA AG </div>
            <div className="col-md-6">Help | Report error</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
