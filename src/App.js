import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* HEADER JAROWA PART*/}
          <div className="row">
            <div className="col-md-6">JAROWA</div>
            <div className="col-md-6">Order Overview</div>
          </div>
          {/* PROFILE HEADER PART*/}
          <div className="row">
            <div className="col-md-6">PROFILE</div>
            <div className="col-md-6">
              <button type="button" class="btn btn-outline-success">
                Success
              </button>
              <button type="button" class="btn btn-outline-success">
                Success
              </button>
              <button type="button" class="btn btn-outline-success">
                Success
              </button>
            </div>
          </div>

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
        </div>
      </div>
    );
  }
}

export default App;
