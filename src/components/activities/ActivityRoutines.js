import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchRoutinesByActivity } from '../';

const ActivityRoutines = () => {
	const { activityId } = useParams();
	const routines = fetchRoutinesByActivity(activityId);

	return <div className="routines">
		<h1>Routines with This Activity</h1>
			{
				routines === 0 ? "There are no routines containing this activity." : 
				<div className="routineList">
					{
                routines.map((routine,index) => {
                    const { id: routineId, creatorName, name: routineName, goal, activities } = routine;
            
                    return <div key={routineId} className="routine">
                        <div className="routineHeader">
                            <h3>{routineName}</h3>
                            <h3><Link to={ `/userroutines/${creatorName}`} >{creatorName}</Link></h3>
                        </div>
                        <div className="routineInner">
                            <label>Goal: </label>{goal}
                            <br /><br />
                            <label>Activities:</label> { !activities.length > 0 ? 'None' : 
                                activities.map((activity, index) =>{
                                    const {id: activityId, name: activityName, description, duration, count} = activity;
                                    return <div className="routineListActivity" key={activityId}>
                                        <div className="routineListActivityHeader">
                                        <Link to={`/activityroutines/${activityId}`}>{activityName}</Link>

                                        </div>
                                        <div className="routineListActivityInner">
                                        <label>Description: </label>{description} <br />
                                        <label>Count: </label>{count}<br />
                                        <label>Duration: </label>{duration} minute(s)
                                        </div>
                                    </div>;
                                })}
                        </div>
                    </div>
                })
            }
			</div>		
			}
		</div>
}

export default ActivityRoutines;