import React from 'react';
import { NewActivity, fetchActivities} from './';

const Activities = (props) => {
	//let people search for routines that include a specific activitiy?
	const { userToken } = props;
    const activities = fetchActivities();
    
    return <div className="activities">
            <h1>Activities</h1>
            <div>
                {!userToken ? null : <NewActivity userToken={userToken} /> }
            </div>
            <br />
            <p>These are all of the activities.</p>
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
        </div>
}

export default Activities;