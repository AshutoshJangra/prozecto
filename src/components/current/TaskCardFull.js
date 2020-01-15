import React, { Component } from 'react';
import '../../App.css' ;

class TaskCardFull extends Component {
  render() {

    const {taskTitle , taskDes , day} = this.props.task;

    return (
      <div className=" bg-white card mv4">

        <div className="flex justify-between bg-light-purple">
            <h2 className="f6 fw6 pa2 pl4 white "> Task {day} </h2>

            <div className=" pa1 ">
                <button className="bg-light-purple white ba b--white br3 f7 pa1 ph3 no-outline mh2"> Download </button>
                <button className="bg-white near-black ba b--white br3 f7 pa1 ph3 mh2 mr3"> Start </button>
            </div>
        </div>
          <div className=" pa3 pb4" >

            <h2 className="f6 fw6 pa2 pl4 mid-gray "> {taskTitle} </h2>
          </div>
      </div>
    );
  }
}

export default TaskCardFull;
