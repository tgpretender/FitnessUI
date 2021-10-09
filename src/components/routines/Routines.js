import React from 'react';
import { Link } from "react-router-dom";
import { NewRoutine, fetchRoutines } from '../';

const Routines = (props) => {
    //have some kind of pagination? (check art collector)
    //have a button to hide/show activities?
    //have a way to search routines for specific ones?

    const { userToken } = props;
    const routines = fetchRoutines();

    return <div className="routines">
        <h1>Routines</h1>
        {!userToken ? null : <NewRoutine userToken={userToken} /> }
        <br />
        <p>These are all the publically available routines.</p>
        <div className="routineList">
            {
                routines.map((routine,index) => {
                    const { id: routineId, creatorName, name: routineName, goal, activities } = routine;
            
                    return <div key={routineId} className="routine">
                        Name: {routineName}<br />
                        Goal: {goal}<br />
                        Creator: 
                        <Link to={ `/userroutines/${creatorName}`} >{creatorName}</Link>
                        <br />
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
        
    </div>
}

export default Routines;