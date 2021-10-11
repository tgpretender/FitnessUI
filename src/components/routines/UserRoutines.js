import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchSelectedUserRoutines} from '../';

const UserRoutines = () => {
	const { creatorName} = useParams();
	const routines = fetchSelectedUserRoutines(creatorName);

	return <div>
		<h1>{creatorName}'s Routines</h1>
		{
			routines.map((routine) => {
				const { id: routineId, name: routineName, goal, activities} = routine;
				return <div key={routineId} className="routine">
					<div className="routineHeader">
						<h3>{routineName}</h3>
					</div>
					<div className="routineInner">
					<label>Goal: </label>{goal}<br />
					<label>Activities: </label>{ !activities.length > 0 ? 'None' : 
                            activities.map((activity, index) =>{
                                const {id: activityId, name: activityName, description, duration, count} = activity;
                                return <div className="routineListActivity" key={activityId}>
									<div className="routineListActivityHeader">
										<Link to={`/activityroutines/${activityId}`}>{activityName}</Link>
									</div>
									<div className="routineListActivityInner">
                                		<label>Description: </label>{description} <br />
										<label>Count: </label>{count}<br />
                                		<label>Duration: </label>{duration} minute(s)<br />
									</div>
                            	</div>;
                        })}
					</div>
				</div>
			})
		}
	</div>
}

export default UserRoutines;