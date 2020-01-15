import React from 'react';
import '../../App.css' ;
import lockIcon from '../../images/lockIcon.svg';

const TaskTemplate = () => {
  return(
     <div className=" bg-white card">
            <h2 className="f6 fw6 pa2 pl4 white bg-light-purple"> Task </h2>

            <div className="tc pa3 pb4" >
              <img src={lockIcon} alt="lock icon" />
              <h2 className="f6 fw6 pa2 pl4 mid-gray "> You need to Add the project to unlock it </h2>
            </div>
     </div>
  );
}

export default TaskTemplate
