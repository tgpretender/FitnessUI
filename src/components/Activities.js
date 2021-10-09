import React, {useState} from 'react';
import { NewActivity, fetchActivities} from './';


const Activities = (props) => {
	//let people search for routines that include a specific activitiy?
	const { userToken, allActivities, setAllActivities } = props;
    const activities = fetchActivities();
    
/////////////
	const fetchAllPublicRoutines = () => {
		const [ publicRoutinesToActivity, setPublicRoutinesToActivity ] = useState([]);
		useEffect(() => {
			fetch(`${baseURL}/routines`, {
				method: 'GET',
				headers: {'Content-Type': 'application/json'}
			})
			.then(res => res.json())
			.then((res) => {
				const response = res;
				setPublicRoutinesToActivity(response);
			})
			.catch(err => console.error(err))
	}, []);
		return publicRoutinesToActivity;
	}
///////////////

    return <div className="activities">
            <h1>Activities</h1>
            <div>
                {!userToken ? null : <NewActivity userToken={userToken} allActivities={allActivities} setAllActivities={setAllActivities}/> }
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
							<button className="actRoutineBtn">Routines</button>
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