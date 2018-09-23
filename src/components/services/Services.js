import React, { Component } from "react";
import ItemService from './ItemService';
import { services } from '../../data/data.json';
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
            {/*<ItemService /> */}
            {services.map((item,i) => (
              <div className="col-md-12" key={i}>
                <h5><strong>{item.title}</strong></h5>
                {item.service.map((element,index) => {
                  return(
                    <ItemService 
                      key = {index}
                      name = {element.name} 
                      fee = {element.fee}
                      currency = {element.currency}
                      star = {element.star_rating}
                    />
                  )
                })}
              </div>
            ))}        
        </div>
      </div>
    );
  }
}

export default Services;