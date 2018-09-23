import React,{Component} from "react";
import "./Languages.css";

class Language extends Component{

  constructor(props) {
      super(props);
      this.level = props.lines;
  }

  getCssClass = (index) => {

    let class_names = ["empty", "empty", "empty"];

    switch(this.level){
      case 1 || "1":
        class_names = ["filled", "empty", "empty"]; // Level 1
        break;
      case 2 || "2":
        class_names = ["filled", "filled", "empty"]; // Level 2
        break;
      case 3 || "3":
        class_names = ["filled", "filled", "filled"]; // Level 3
        break;
      default:
      class_names = ["empty", "empty", "empty"];
    }

    return (class_names[index]);
  }

  render(){
    return (
       
          <div className="col-md-3">
  
            <div className="level text-center"><small>{this.props.level}</small></div>
            <div className="lines">  

                <div className={this.getCssClass(0)}></div>
                <div className={this.getCssClass(1)}></div>
                <div className={this.getCssClass(2)}></div>

            </div>

            <p className="languageName text-center">{this.props.name}</p>
          </div>
    );
  }
}
  
export default Language;