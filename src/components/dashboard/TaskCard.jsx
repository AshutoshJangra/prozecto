import React , { Component} from 'react' ;

import arrowDown from '../../images/scroll-down-icon.png' ;

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
	
		const {taskTitle , taskDes , day} = this.props.task;

		return( 
			<div className={day%2==0 ? "taskcard bb b--light-gray w-90-m" : "taskcard-d  bb b--light-gray w-90-m "} style={{marginLeft:'auto' , marginRight:'auto'}} >
				<div className='flex justify-between'>
					<div className='f5 fw5 '>{taskTitle}</div>
					<div>
						<button onClick={this.toggleButton} className="bn   mr4 pt2 pb0 bg-white black" > <img src={arrowDown} alt="" style={{width:'20px'}}/> </button>
						<button onClick={this.toggleButton} className="bn w3 h2 br2 mt0 f7 bg-light-gray black" > Done </button>
					</div>
				</div>
				<div className={this.state.isOpen ? 'dib f7 dark-gray ma2  ml0 no-outline' : 'dn'}>{taskDes}</div>
				
			</div>
		);
	}
}

export default TaskCard;