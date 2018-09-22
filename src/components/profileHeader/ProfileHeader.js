import React from "react";
import "./Profile.css";

const ProfileHeader = () => {
  return (
    <div className="row profile">
      <div className="col-md-6">
        <h3 className="text-left">
          <strong>PROFILE</strong>
        </h3>
      </div>

      <div className="col-md-6">
        <div className="text-right">
          <button type="button" className="btn btn-outline-success">
            <strong>Back</strong>
          </button>
          <button type="button" className="btn btn-outline-success">
            <strong>Edit Profile</strong>
          </button>
          <button type="button" className="btn btn-outline-success">
            <strong>Edit Offer</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
