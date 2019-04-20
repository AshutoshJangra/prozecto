import React, { Component } from "react";
import "../../App.css";
import RegisterHome from "../register/RegisterHome";

import Working from "./Working";

class MainPage extends Component {
  render() {
    return (
      <div className="main-showcase">
       
        <div className="flex-ns light-theme">
          <div className="main-showcase f1 w-100-ns w-50-l dn dib-ns dn-m pa6  pt5">
            <h2 className="tag-line dark-gray tc mb4 mt4 fw1 lh-copy ">
              Learn & Apply in 24 Hours
            </h2>

            <p className="description tc fw1 f3 mid-gray sans-serif ">
              Pick up a project , learn the skills required for it and make that
              project in 24 hours.
            </p>
          </div>

        {/* tagline for mbile screen*/}

        <div className="tagline-sm dn-ns">
           <h2 className="dark-gray pa2 pt4 ma0 fw1 heading tc sans-serif  f3">Learn & Apply in 24 Hours</h2>
        </div>

          <div className="register-form f1 w-100-ns w-50-l pl5-ns pr5-ns">
            <RegisterHome />
          </div>
        </div>

        {/*How it works*/}
        <div className="light-theme">
          <Working />
        </div>
      </div>
    );
  }
}

export default MainPage;
