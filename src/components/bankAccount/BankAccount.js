import React from "react";
import "./BankAccount.css";
import { bank_account } from "../../data/data.json";

const BankAccount = () => {
  return (
    <div className="row bankAccount">
      <div className="col-md-12">
        <div className="row">
          <h5>
            <strong>BANK ACCOUNT</strong>
          </h5>
        </div>

        <div className="row rows">
          <div className="col-md-5">
            <span className="title"> Owner:</span>
          </div>
          <div className="col-md-7">
            <span className="title"> {bank_account.owner}</span>
          </div>
        </div>

        <div className="row rows">
          <div className="col-md-5">
            <span className="title"> IBAN:</span>
          </div>
          <div className="col-md-7">
            <span className="title"> {bank_account.iban}</span>
          </div>
        </div>

        <div className="row rows">
          <div className="col-md-5">
            <span className="title"> VAT:</span>
          </div>
          <div className="col-md-7">
            <span className="title"> {bank_account.vat}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
