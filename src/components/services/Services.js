import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';
import ItemService from './ItemService';
import { test } from '../../data/data.json';
import "./Services.css";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      //services:services
    }
  }



  render() {
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
            {/*<ItemService /> */}

            {test.map((item) =>
              item.servicio.map((element) => {
                return (<ItemService />)
              })

            )}


          </div>
        </div>
      </div>
    );
  }
}

export default Services;