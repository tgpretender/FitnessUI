import React from 'react';
import { useParams } from 'react-router-dom';
//import { fetchSelectedActivityRoutines} from '../';

const ActivityRoutines = () => {
//	const { activityId } = useParams();
	const routines = fetchSelectedActivityRoutines(creatorName);

	return <div>
		<h1>{activityName}'s Routines</h1>
		{
			routines.map((routine) => {
				const { id: routineId, name: routineName, goal, activities} = routine;
				return <div key={routineId} className="routine">
					Name: {routineName}<br />
					Goal: {goal}<br />
					Activities: { !activities.length > 0 ? 'None' : 
                            activities.map((activity, index) =>{
                                const {id: activityId, name: activityName, description, duration, count} = activity;
                                return <div className="routineListActivity" key={activityId}>
                                Name: {activityName} <br />
                                Description: {description} <br />
                                Duration: {duration} <br />
                                Count: {count}
                            </div>;
                        })}
				</div>
			})
		}
	</div>
}

export default ActivityRoutines;