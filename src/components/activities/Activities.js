import {useState} from 'react';
import { Link } from "react-router-dom";
import { NewActivity, EditActivity, fetchActivities} from '../';

const ActivityMap = new Map();

const Activities = (props) => {
	const { baseURL, userToken } = props;
	const [ showEditForm, setShowEditForm] = useState(true);



    const activities = fetchActivities();

    return <div className="activities">
            <h1>Activities</h1>
            <div>
                {!userToken ? null : <NewActivity userToken={userToken} /> }
            </div>
            <br />
			<div className="activitiesList">
				{
					activities.map((activity,index) => {
						const { id, name, description } = activity;
						if(!ActivityMap.has(id)){
							ActivityMap.set(id, false);
						}
						//console.log(ActivityMap);
						return <div key={id} className="activity">
							<div className="routineListActivityHeader">{name}</div>
							<div className="routineListActivityInner">
								<label>Description:</label> {description}
								<br /><br />
								<Link to={ `/activityroutines/${id}`} className="navLink" >Routines</Link>
								{ !ActivityMap.get(id) ? <button className="navLink" onClick={() => {
									setShowEditForm(!showEditForm)
									ActivityMap.set(id, true)
									
								}}>Edit Activity</button> : 
								<button className="navLink" onClick={() => {
									setShowEditForm(!showEditForm);
									ActivityMap.set(id, false)
								}}>Hide</button>}
								<br /><br />
								{ !ActivityMap.get(id) ? null : <EditActivity baseURL={baseURL}userToken={userToken} id={id} /> }
							</div>
						</div>
					})
				}
			</div>
        </div>
}

export default Activities;