import React, { Component } from 'react';
import '../../App.css';


class CurrentRM extends Component {
  render() {

    const { author, title,level,concept } = this.props.project;

    return (
      <div className="add-pro-box card">
        <h2 className= 'tet f3 mv2 dark-gray' >{title}</h2>

        <div className="flex justify-between mv2 pv2 ">
          <h3 className="f6  mid-gray mr3">{concept}</h3>
          <h3 className="f6  mid-gray mh2">{level}</h3>
        </div>

        <button className="learn-more-btn  card">Live Demo</button>
        <button className="learn-more-btn card " style={{background:'#1e2730',  color:'#fff' , border:'none'}}>Submit</button>

        <p className="f7 mv2  mh0  near-black">Click on submit when task is finished</p>
      </div>
    );
  }
}

export default CurrentRM;
