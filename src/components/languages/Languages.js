import React,{Component} from "react";
import "./Languages.css";
import Language from "./Language";
import { languages } from "../../data/data.json";

class Languages extends Component{

  constructor() {
      super();
      
  }

  render(){
    return (
      <div className="row languages">
        <div className="col-md-12">
          <h5>
            <strong>LANGUAGES</strong>
          </h5>
          <div className = "row">
          {
            languages.map((item) => (
              <Language name = {item.name} />
            ))
          }
          </div>
        
        </div>
      </div>
    );
  }
}
  

export default Languages;
