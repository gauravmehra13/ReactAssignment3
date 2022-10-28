import React, { Component } from "react";
import Details from "./Details";
import "./style.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      name: "",
      dept: "",
      rating: "",
      arr: [],
    };
  }

  toggleClick = () => {
    this.setState({ click: !this.state.click });
  };

  eventTrigger = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitForm() {
    console.log("Worked");
    const det_obj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
    };
    this.state.arr.push(det_obj);

    this.setState({
      click: true,
      name: "",
      dept: "",
      rating: "",
    });
  }

  render() {
    return (
      <div>
        {!this.state.click && (
          <>
            {" "}
            <h1 style={{ textAlign: "Center" }}>EMPLOYEE FEEDBACK FORM</h1>
            <form>
              <label className="form_elem1" htmlFor="name">
                Name:
              </label>
              <input
                className="form"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.eventTrigger}
                required
              />
              <br />
              <br />

              <label className="form_elem2" htmlFor="dept.">
                Department:
              </label>
              <input
                className="form"
                type="text"
                name="dept"
                id="dept."
                placeholder="Enter your Dept"
                value={this.state.dept}
                onChange={this.eventTrigger}
                required
              />
              <br />
              <br />

              <label className="form_elem3" htmlFor="rating">
                Rating:
              </label>
              <input
                className="form"
                type="number"
                name="rating"
                id="rating"
                placeholder="Enter your Rating"
                value={this.state.rating}
                onChange={this.eventTrigger}
                required
              />
              <br />
              <br />

              <input
                className="sub_btn"
                type="submit"
                onClick={() => this.submitForm()}
              />
            </form>
          </>
        )}
        {this.state.click && (
          <Details details={this.state.arr} funcTogg={this.toggleClick} />
        )}
      </div>
    );
  }
}

export default Form;