import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: "Center" }}>EMPLOYEE DATA</h1>
        <div className="details">
          {this.props.details.map((elem) => {
            return (
              <div id="container">
                <h2>
                  {" "}
                  {elem.count} : {elem.name} || {elem.dept} || {elem.rating}
                </h2>
              </div>
            );
          })}
        </div>
        <button className="sub_btn" onClick={this.props.funcTogg}>
          Go back
        </button>
      </>
    );
  }
}

export default Details;