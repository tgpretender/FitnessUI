import React from 'react';
import { Link } from "react-router-dom";
import { NewRoutine, fetchRoutines } from '../';

const Routines = (props) => {
    const { userToken } = props;
    const routines = fetchRoutines();
    routines.reverse();

    return <div className="routines">
        <h1>Routines</h1>
        {!userToken ? null : <NewRoutine userToken={userToken} /> }
        <br />
        <br />
        <p>Click the username of any user to see a list of their publically available routines.</p>
        <br />
        <p>Click the name of any activity to see routines that include it.</p>
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
        
    </div>
}

export default Routines;