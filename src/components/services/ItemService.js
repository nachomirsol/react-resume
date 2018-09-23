import React, { Component } from 'react';
import "./Services.css";
import StarRatingComponent from 'react-star-rating-component';

class ItemService extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
        }
    }

    handleShow = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                {this.state.isOpen
                ?
                <div className ={"row titleservice " + (this.state.isOpen ? 'hide' : 'show')}>
                <div className ="col-md-12">

                    <strong className ="float-left">{this.props.name}</strong>
                    <strong className="float-right"><a onClick={this.handleShow}>{this.state.isOpen ? "Hide ∨" : "Show ⌃"}</a></strong>

                    <div className ="col-md-12 grey">
                        <span className ="float-left">Fee</span>
                        <strong className = "float-right">{this.props.fee} {this.props.currency} per hour</strong>
                    </div>
                </div>
            </div>
            :
            <div className ="row hidden">
                <div className ="col-md-12">
                    <strong className ="float-left">{this.props.name}</strong>
                    <strong className="float-right"><a onClick={this.handleShow}>{this.state.isOpen ? "Hide ∨" : "Show ⌃"}</a></strong>

                    <div className ="row star">
                        
                        <span className="starrate">(-)</span>
                                <StarRatingComponent
                                    name={"rating"}
                                    value={5}
                                    starCount={this.props.star_rating}
                                />
                        <span className="starate"><strong>{this.props.fee} {this.props.currency} per hour</strong></span>         
                    </div>
                </div>
            </div>
            }
            </div>
        )
    }
}

export default ItemService;