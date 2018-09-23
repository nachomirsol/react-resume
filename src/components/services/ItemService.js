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
                <div className={"row titleservice " + (this.state.isOpen ? 'hide' : 'show')}>
                    <div className="col-md-8 ">
                        <strong>{this.props.name}</strong>
                    </div>
                    <div className="col-md-4 text-right">
                        <strong><a onClick={this.handleShow}>{this.state.isOpen ? "Hide ∨" : "Show ⌃"}</a></strong>
                    </div>
                </div>

                {this.state.isOpen
                    ?
                    <div className="row grey">
                        <div className="col-md-7 ">
                            <strong>Fee</strong>
                        </div>
                        <div className="col-md-5 text-right">
                            <strong>{this.props.fee} {this.props.currency} per hour</strong>
                        </div>
                    </div>
                    :
                    <div className="row star">
                        <div className="col-md-12 starhideshow">
                            <span className="star">(-)</span>
                            <StarRatingComponent
                                name={"rating"}
                                value={5}
                                starCount={this.props.star_rating}
                            />
                            <span className="starate"><strong>35 CFH per hour</strong></span>
                        </div>
                    </div>
                }

            </div>
        )
    }
}


export default ItemService;