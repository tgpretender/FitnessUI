import {useState, useEffect} from 'react';

import {
	NewActivity,
	NewRoutine
} from './';

const Profile = (props) => {
	const { baseURL, userToken } = props;
	const [ showRoutines, setShowRoutines ] = useState(false);
	const [ showActivities, setShowActivities ] = useState(false);
	const [ showRoutineForm, setShowRoutineForm ] = useState(false);
	const [ showActivityForm, setShowActivityForm ] = useState(false);
	const creatorName = "Peter";
	const [ userRoutines, setUserRoutines] = useState([]);
	const [ userActivities, setUserActivities ] = useState([]);

	useEffect(() => {
        fetch(`${baseURL}/users/:${creatorName}/routines`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then((res) => {
            const response = res;
            setUserRoutines(response);
        })
        .catch(err => console.error(err))
    }, []);

    return <div>
        	<h1>Profile</h1>
			<p>Here are your routines and activities. You can edit, delete, and create new routines and activities from here.</p>
			<section className="profileSection">
				<div className="profileDivs">
					<h2>My Routines</h2>
					{ showRoutineForm ? <button className="showButton" onClick={() => setShowRoutineForm(false)}>Hide New Routine Form</button> : 
					<button className="showButton" onClick={() => setShowRoutineForm(true)}>Create New Routine</button>}

					{!showRoutineForm ? null : <NewRoutine baseURL={baseURL} userToken={userToken} />}
				</div>
				<div>
					{ showRoutines ? <button className="showButton" onClick={() => setShowRoutines(false)}>Hide Routines</button> : 
					<button className="showButton" onClick={() => setShowRoutines(true)}>Show Routines</button>}
					<br />
					{!showRoutines ? null : "This will eventually be a list of routines."}
				</div>
			</section>
			<section className="profileSection">
				<div className="profileDivs">
				<h2>My Activities</h2>
					{ showActivityForm ? <button className="showButton" onClick={() => setShowActivityForm(false)}>Hide New Activity Form</button> : 
					<button className="showButton" onClick={() => setShowActivityForm(true)}>Create New Activity</button>}
					{!showActivityForm ? null : <NewActivity baseURL={baseURL} userToken={userToken} />}
				</div>
				<div>
					{ showActivities ? <button className="showButton" onClick={() => setShowActivities(false)}>Hide Activities</button> : 
					<button className="showButton" onClick={() => setShowActivities(true)}>Show Activities</button>}
					<br />
					{!showActivities ? null : "This will eventually be a list of activities."}
				</div>
			</section>
        </div>
}

export default Profile;