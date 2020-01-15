import React, { Component } from 'react';
import '../../App.css';

class TimeCard extends Component {
  render() {
    return (
          <div className="time-template card">
            <h1 className="tc navy  f6 border-light-bt pb3"><span className="f2 fw6 navy ">17 : 21 </span> Hours Left </h1>
            <p className="f6 fw5 near-black tc pt2">No Points will be rewarded to submissions after time is up</p>
          </div>
    );
  }
}

export default TimeCard;
