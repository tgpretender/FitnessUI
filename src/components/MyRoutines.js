import {useState} from 'react';

import {
	NewActivity,
	NewRoutine,
	fetchLoggedInUserRoutines,
	deleteRoutine,
	EditRoutine
} from './';

const MyRoutines = (props) => {
	const { baseURL, userToken, usernameString } = props;
	const [ showRoutineForm, setShowRoutineForm ] = useState(false);
	const [ showActivityForm, setShowActivityForm ] = useState(false);
	const [ showEdit, setShowEdit] = useState(true)

	const routines = fetchLoggedInUserRoutines(usernameString, userToken);

	
	const addActivity = () => {
		//add activity without replacing the others
		//set count and duration
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
								{ showEdit ? <button className="showButton" onClick={() => setShowEdit(false)}>Hide</button> : 
								<button className="showButton" onClick={() => setShowEdit(true)}>Edit Routine</button>}
								

								{ !showEdit  ? null : 
								<div className="routineEditForm">
									<br />
									<EditRoutine baseURL={baseURL} userToken={userToken} id={id}/>
								</div>}<br />
								<button onClick={() => deleteRoutine({id}, userToken)}>Delete Routine</button>
								<br /><br />
								Activities: {
									activities.length === 0 ? "None" : "yes"
								}
								<br /><br />
								<button>Add Activity</button><br />
								<button>Edit Activity</button><br />
								<button>Delete Activity</button>

								</div>
						})
					}
				</div>
			</section>
        </div>
}

export default MyRoutines;