import { useState, useEffect } from 'react';

const Routines = (props) => {
    const { baseURL } = props;
    const [ publicRoutines, setPublicRoutines ] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/routines`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then((res) => {
            const response = res;
            setPublicRoutines(response);
        })
        .catch(err => console.error(err))
    }, []);

    return <div className="routines">
        <h1>Routines</h1>
        <p>These are all the publically available routines.</p>
        <div className="routineList">
            {
                publicRoutines.map((routine,index) => {
                    const { id: routineId, creatorName, name: routineName, goal, activities } = routine;
                    const rActs = [];
                    if(activities.length > 0){
                        activities.map((activity, index) => {
                            const {id: activityId, name: activityName, description, duration, count} = activity;

                            const template = `
                               <div className="routineActivityList" key={activityId}>
                                    Name: {activityName} <br />
                                    Description: {description} <br />
                                    Duration: {duration} <br />
                                    Count: {count}
                                </div>`;

                            rActs.push(template);
                        })
                    } else {
                        rActs.push("None");
                    }

                    return <div key={routineId} className="routine">
                        Name: {routineName}<br />
                        Goal: {goal}<br />
                        Creator: {creatorName}<br />
                        Activities: <br />
                        {rActs}
                    </div>
                })
            }
        </div>
        
    </div>
}

export default Routines;