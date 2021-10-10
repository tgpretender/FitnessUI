import {useState} from 'react';
import { Link } from "react-router-dom";
import { NewActivity, EditActivity, fetchActivities} from '../';


const Activities = (props) => {
	const { baseURL, userToken, allActivities, setAllActivities } = props;
	const [ showEditForm, setShowEditForm] = useState(true);

    const activities = fetchActivities();

    return <div className="activities">
            <h1>Activities</h1>
            <div>
                {!userToken ? null : <NewActivity userToken={userToken} allActivities={allActivities} setAllActivities={setAllActivities}/> }
            </div>
            <br />
			<div className="activitiesList">
				{
					activities.map((activity,index) => {
						const { id, name, description } = activity;
						return <div key={id} className="activity">
							<div className="routineListActivityHeader">{name}</div>
							<div className="routineListActivityInner">
								<label>Description:</label> {description}
								<br /><br />
								<Link to={ `/activityroutines/${id}`} className="navLink" >Routines</Link>
								{ showEditForm ? "hide" : "show"}
								<br /><br />
								{ !showEditForm ? null : <EditActivity baseURL={baseURL} id={id} /> }
							</div>
						</div>
					})
				}
			</div>
        </div>
}

export default Activities;


/*
			<div className="activitiesList">
				{
					activities.map((activity,index) => {
						const { id, name, description } = activity;
						return <div key={id} className="activity">
							Name: {name}<br />
							Description: {description}
						</div>
					})
				}
			</div>
*/