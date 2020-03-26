import React, { Component } from "react";
import "../../App.css";
import { BrowserRouter as Router} from "react-router-dom";

import Header from "../shared/Header";
import ProjectList from "../projectsListing/ProjectList";


class MainPage extends Component {
  render() {
    return (
      <Router >
        <div className="mainPage ">
          <div className="showcase">

              <div className="overlay"></div>
              <div className="bgimage"></div>
                <div className="main-showcase  ">
                <Header  />

                <div className="headline">
                    <h1 className="pl5-ns pl3 ml3 f4 f2-ns mt5 pt3 fw7 white" style={{}}>Escape The Tutorial Hell <span className="f4">&</span> <br/> Start Making Projects</h1>
                    <p className="f6-ns f7 white ph5-ns ph3 mh3 mv4   w-50 ">Don't wait around for learning everything to build projects. Start now with our Starter Packs and Resource Guides</p>
                </div>
            </div>
          </div>

           <div className="filter   flex justify-between items-center bg-white card ma3 ph3 pv1 pr0 ">
                <div className="form flex items-center">
                  <h2 className="f7  pa2 ml4 ttu mid-gray">Choose <br/> Category</h2>
                  <select name="category" id="category" className="w5 ma3 f6 pa3" placeholder="s">
                      <option value="html">HTML</option>
                      <option value="reactjs">React Js</option>
                  </select>
                  
                  <label for="fullProject" className="lh-copy f6 ml3 ph2">
                  <input className="mr2 " type="radio" id="fullProject" value="fullProject"/>
                  Full Projects
                  </label>

                  <label for="shortProject" className="lh-copy f6 ml3 ph2">
                  <input className="mr2 " type="radio"  id="shortProject" value="shortProject"/>
                  Short Projects
                  </label>
                </div>

                <div className="form-submit ma0 pa0 mr4">
                    <button className="bn border-light no-outline br4 gray bg-white w-100 f6  ph3 mr3 pv3 fw6 ph4 ma0 ttu ">search</button>
                </div>
                  
            </div>
            
            <div className="listing-area ">
                <ProjectList />
            </div>
            
            
        </div>
      </Router>
    );
  }
}


export default MainPage;
