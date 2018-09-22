import React from "react";
import "./ContactInfo.css";
import { contact_info } from "../../data/data.json";

const ContactInfo = () => {
  return (
    <div className="row contact-info">
      <div className="col-md-5">
        <img
          src="http://cdn-img.instyle.com/sites/default/files/styles/original/public/migrated_assets/15/02/HarveySpecter.jpg?itok=V3WE9cau"
          className="rounded-circle"
          alt="Harvey Specter"
        />
      </div>
      <div className="col-md-7">
        <h4>
          <strong>
            {contact_info.title} {contact_info.name}
          </strong>
        </h4>
        <button type="button" className="btn btn-outline-secondary">
          <small><strong>♀ 68 years</strong></small>
        </button>

        <h5><strong>{contact_info.name}</strong></h5>

        <p><span>{contact_info.street}{contact_info.town}</span></p>

        <div className="icons">
            <p><i className="fas fa-phone fa-flip-horizontal"></i>{contact_info.telephone}</p>
            <p><i className="fas fa-envelope"></i>{contact_info.email}</p>
            <p><i className="fas fa-globe"></i> <span>{contact_info.website}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
