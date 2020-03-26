import React, {Component} from 'react';
import '../../App.css';

import ProjectList from './ProjectList';
import Categories from './Categories';
import MainRM from '../rightMenu/MainRM';

class ProjectListing extends Component {
	render(){

		return(
        		<div className="flex justify-end">
        			
        				<div style={{maxWidth:'50vw'}}>
                                        <ProjectList />
                                         </div>
                                         <div className="dn dib-ns">
                                        <MainRM />
                                         </div>
        			
				
        		</div>
		);
	}
}


export default ProjectListing;
