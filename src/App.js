import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ProfileHeader from "./components/profileHeader/ProfileHeader";
import ContactInfo from "./components/contactInfo/ContactInfo";
import Languages from "./components/languages/Languages";
import Qualifications from "./components/qualifications/Qualifications";
import Geographical from "./components/geographical/Geographical";
import BankAccount from "./components/bankAccount/BankAccount";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer"

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
          <div className="row mid">
            {/* PERSONAL INFO PART*/}
    
            <div className="col-md-7 left-part">
              <ContactInfo />  
              <Languages />    
              <Qualifications />
              <Geographical />
              <BankAccount />
            </div>

            {/* SERVICES PART*/}
            <Services />
          </div>
          {/* FOOTER PART*/}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;