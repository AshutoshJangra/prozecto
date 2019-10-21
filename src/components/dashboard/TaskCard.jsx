import React , { Component} from 'react' ;

import '../../App.css';

class TaskCard extends Component{
		constructor() {
		super();
		this.state = {
			isOpen : false
		};
	}

	toggleButton = () => {
		this.setState((prev) => {
			return {isOpen : !prev.isOpen} ; 
		})
	}

	render(){
		console.log(this.props) ;
		const {taskTitle , taskDes , day} = this.props.task;

		return( 
			<div className={day%2==0 ? "taskcard-d " : "taskcard br3  "}  >
				<div className='flex justify-between'>
					<div className='f6 '>{taskTitle}</div>
					<div>
						<button onClick={this.toggleButton} className="bn -black w3 h2 br2 f7 mr2  bg-white black" > Info </button>
						<button onClick={this.toggleButton} className="bn -black w3 h2 br2 f7 bg-light-green black" > Done </button>
					</div>
				</div>
				<div className={this.state.isOpen ? 'dib f7 dark-gray ma2  ml0 no-outline' : 'dn'}>{taskDes}</div>
				
			</div>
		);
	}
}

export default TaskCard;