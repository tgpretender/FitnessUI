import {useState} from 'react';
import { Link } from "react-router-dom";
import { NewActivity, EditActivity, fetchActivities} from '../';

const ActivityMap = new Map();

const Activities = (props) => {
	const { baseURL, userToken, isAuthenticated } = props;
	const [ showEditForm, setShowEditForm] = useState(true);

    const fetched = fetchActivities();
	const sorted = fetched.sort((a, b) => a.id - b.id);
	const activities = sorted.reverse();

    return <div className="activities">
            <h1>Activities</h1>
            <div>
                {!userToken ? null : <NewActivity userToken={userToken} /> }
            </div>
			<br />
			<p>Click the name of any activity to see routines that include it.</p>
            <br />
			<div className="activitiesList">
				{
					activities.map((activity,index) => {
						const { id, name, description } = activity;
						if(!ActivityMap.has(id)){
							ActivityMap.set(id, false);
						}
						return <div key={id} className="activity">
							<div className="routineListActivityHeader">
								<Link to={`/activityroutines/${id}`}>{name}</Link> {id}
							</div>
							<div className="routineListActivityInner">
								<label>Description:</label> {description}
								<br /><br />
								{ !isAuthenticated ? null : 
									<div>
										{ !ActivityMap.get(id) ? <button className="navLink" onClick={() => {
									setShowEditForm(!showEditForm)
									ActivityMap.set(id, true)
									
								}}>Edit Activity</button> : 
								<button className="navLink" onClick={() => {
									setShowEditForm(!showEditForm);
									ActivityMap.set(id, false)
								}}>Hide</button>}
									<br /><br />
									</div>
								}
								{ !ActivityMap.get(id) ? null : <EditActivity baseURL={baseURL} userToken={userToken} id={id} /> }
								
							</div>
						</div>
					})
				}
			</div>
        </div>
}

export default Activities;