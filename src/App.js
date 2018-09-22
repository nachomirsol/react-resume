import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ProfileHeader from "./components/profileHeader/ProfileHeader";
import ContactInfo from "./components/contactInfo/ContactInfo";
import Languages from "./components/languages/Languages";
import Qualifications from "./components/qualifications/Qualifications";
import Geographical from "./components/geographical/Geographical";
import BankAccount from "./components/bankAccount/BankAccount";
import Services from "./components/services/Services.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* HEADER JAROWA PART*/}
          <Header />
          {/* PROFILE HEADER PART*/}
          <ProfileHeader />

          {/* PERSONAL INFO AND SERVICES PART*/}
          <div className="row">
            {/* PERSONAL INFO PART*/}

            {/* CONTACT INFO PART*/}
            <div className="col-md-7">
              <ContactInfo />
              {/* LANGUAGES PART*/}
              <Languages />
              {/* QUALIFICATIONS PART*/}
              <Qualifications />
              {/* GEOGRAPHICAL PART*/}
              <Geographical />
              {/* GEOGRAPHICAL PART*/}
              <BankAccount />
            </div>

            {/* SERVICES PART*/}
            <Services />
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
