import React, { Component } from "react";
import "./index.css";
const formClass = ["b_form", "r_form", "c_form", "d_form", "e_form", "f_form", "g_form", "h_form"];

class Form extends Component {
  state = {
    mon: this.props.mon,
    tue: this.props.tue,
    wed: this.props.wed,
    thu: this.props.thu,
    fri: this.props.fri,
    sat: this.props.sat,
    sun: this.props.sun,
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.state = {
      mon: nextProps.mon,
      tue: nextProps.tue,
      wed: nextProps.wed,
      thu: nextProps.thu,
      fri: nextProps.fri,
      sat: nextProps.sat,
      sun: nextProps.sun,
    };
  }
  render() {
    return (
      <div id="classForm">
        {this.state.mon.map((ele, index) => {
          return (
            <div key={index} className={formClass[Number(ele)]}>
              Mon.{index + 1}
            </div>
          );
        })}
        {this.state.tue.map((ele, index) => {
          return (
            <div key={index} className={formClass[Number(ele)]}>
              Tue.{index + 1}
            </div>
          );
        })}
        {this.state.wed.map((ele, index) => {
          return (
            <div key={index} className={formClass[Number(ele)]}>
              Wed.{index + 1}
            </div>
          );
        })}
        {this.state.thu.map((ele, index) => {
          return (
            <div key={index} className={formClass[Number(ele)]}>
              Thu.{index + 1}
            </div>
          );
        })}
        {this.state.fri.map((ele, index) => {
          return (
            <div key={index} className={formClass[Number(ele)]}>
              Fri.{index + 1}
            </div>
          );
        })}
        {this.state.sat.map((ele, index) => {
          return (
            <div key={index} className={formClass[Number(ele)]}>
              Sat.{index + 1}
            </div>
          );
        })}
        {this.state.sun.map((ele, index) => {
          return (
            <div key={index} className={formClass[Number(ele)]}>
              Sun.{index + 1}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Form;
