import {useState} from 'react';

import {
	NewActivity,
	NewRoutine,
	fetchLoggedInUserRoutines
} from './';

const MyRoutines = (props) => {
	const { baseURL, userToken, usernameString } = props;
	const [ showRoutineForm, setShowRoutineForm ] = useState(false);
	const [ showActivityForm, setShowActivityForm ] = useState(false);

	const routines = fetchLoggedInUserRoutines(usernameString, userToken);

	const editRoutine = () => {
		//edit the name, goal, or public status of the routine
		//patch request
	}
	const deleteRoutine = () => {
		//delete the routine
	}
	const addActivity = () => {
		//add activity without replacing the others
		//STRETCH: only show activities not currently on the routine
	}
	const editActivity = () => {
		//edit the duration or count of an activity
		//patch request
	}
	const deleteActivity = () => {
		//delete activity from the routine
	}



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
					{ 
						routines.map((routine) => {
							const { id, isPublic, name, goal, activities} = routine;
							return <div key={id} className="profileRoutine"
							>
								{
									isPublic ? <div className="publicRoutine">Public</div> : <div className="privateRoutine">Private</div>
								}
								Name: {name}<br />
								Goal: {goal}<br />
								Activities: {
									activities.length === 0 ? "None" : "yes"
								}
								<br /><br />
								<button>Edit Routine</button>
								<button>Delete Routine</button>
								<button>Add Activity</button>
								<button>Edit Activity</button>
								<button>Delete Activity</button>

								</div>
						})
					}
				</div>
			</section>
        </div>
}

export default MyRoutines;