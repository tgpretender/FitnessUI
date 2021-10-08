import {useState, useEffect} from 'react';

import {
	NewActivity,
	NewRoutine
} from './';

const MyRoutines = (props) => {
	const { baseURL, userToken, usernameString } = props;
	const [ showRoutines, setShowRoutines ] = useState(false);
	const [ showRoutineForm, setShowRoutineForm ] = useState(false);
	const [ showActivityForm, setShowActivityForm ] = useState(false);
	const [ userRoutines, setUserRoutines] = useState([]);

	useEffect(() => {
        fetch(`${baseURL}/users/:${usernameString}/routines`, {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${userToken}`
			}
        })
        .then(res => res.json())
        .then((res) => {
            const response = res;
            setUserRoutines(response);
        })
        .catch(err => console.error(err))
    }, []);

    return <div>
        	<h1>{usernameString}'s Routines</h1>
			<p>Here are your routines. You can edit, delete, and create new routines from here.</p>
			<section className="profileSection">
				<div className="profileDivs">
					{ showRoutineForm ? <button className="showButton" onClick={() => setShowRoutineForm(false)}>Hide</button> : 
					<button className="showButton" onClick={() => setShowRoutineForm(true)}>Create New Routine</button>}

					{!showRoutineForm ? null : <NewRoutine baseURL={baseURL} userToken={userToken} />}
				</div>
				<div className="profileDivs">
					{ showActivityForm ? <button className="showButton" onClick={() => setShowActivityForm(false)}>Hide</button> : 
					<button className="showButton" onClick={() => setShowActivityForm(true)}>Create New Activity</button>}
					{!showActivityForm ? null : <NewActivity baseURL={baseURL} userToken={userToken} />}
				</div>
				<div className="profileDivs">
					<h2>My Routines</h2>
					<br />
					<p>"This will eventually be a list of routines."</p>
				</div>
			</section>
        </div>
}

export default MyRoutines;