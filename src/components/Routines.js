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
    console.log('public routines: ',publicRoutines);

    return <div className="routines">
        <h1>Routines</h1>
        <p>These are all the publically available routines.</p>
        <div class="routineList">
            {
                publicRoutines.map((routine,index) => {
                    const { id, creatorName, name, goal } = routine;
                    return <div key={id} className="routine">
                        <div className="routineHeading">Name: {name}</div>
                        <div className="routineGoal">Goal: {goal}</div> 
                        <div className="routineCreator">Creator: {creatorName}</div>
                    </div>
                })
            }
        </div>
        
    </div>
}

export default Routines;