import {useState} from 'react';

import {
	NewActivity,
	NewRoutine,
	fetchLoggedInUserRoutines,
	deleteRoutine,
	EditRoutine,
	NewRoutineActivity,
	EditRoutineActivity
} from './';

const MyRoutines = (props) => {
	const { baseURL, userToken, usernameString } = props;
	const [ showRoutineForm, setShowRoutineForm ] = useState(false);
	const [ showActivityForm, setShowActivityForm ] = useState(false);
	const [ showEditRoutine, setShowEditRoutine] = useState(false);
	const [ showAddRoutineActivity, setShowAddRoutineActivity] = useState(false);
	const [ showEditRoutineActivity, setShowEditRoutineActivity] = useState(false);

	const routines = fetchLoggedInUserRoutines(usernameString, userToken);

    return <div>
        	<h1>{usernameString}'s Routines</h1>
			<p>Here are your routines. You can create, edit, and delete them.</p>
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
								Goal: {goal}
								<br /><br />

								{ showEditRoutine ? <button className="showButton" onClick={() => setShowEditRoutine(false)}>Hide</button> : 
								<button className="showButton" onClick={() => setShowEditRoutine(true)}>Edit Routine</button>}
								{ !showEditRoutine  ? null : 
								<div className="routineEditForm">
									<br />
									<EditRoutine userToken={userToken} id={id}/>
								</div>}<br />
								<button onClick={() => deleteRoutine({id}, userToken)}>Delete Routine</button>
								<br /><br />

								Activities: {
									activities.length === 0 ? "None" : 
									<div>
										{ 
											activities.map((activity) => {
												const { routineActivityId, name, descrition, count, duration  } = activity;
												return <div key={routineActivityId}>
													Name: {name}<br />
													Description: {descrition}<br />
													Count: {count}<br />
													Duration: {duration}
													<br /><br />
													
													{ showEditRoutineActivity ? <button className="showButton" onClick={() => setShowEditRoutineActivity(false)}>Hide</button> : 
													<button className="showButton" onClick={() => setShowEditRoutineActivity(true)}>Edit Activity</button>}
													{ !showEditRoutineActivity ? null : 
														<EditRoutineActivity userToken={userToken} routineActivityId={routineActivityId} />
													}
													<br />
													<button>Delete Activity</button>
													<br /><br />
												</div>
											})
										}
									</div>
								}
								<br /><br />
								{ showAddRoutineActivity ? <button className="showButton" onClick={() => setShowAddRoutineActivity(false)}>Hide</button> : 
								<button className="showButton" onClick={() => setShowAddRoutineActivity(true)}>Add Activity</button>}
								<br />
								{ !showAddRoutineActivity ? null : 
								<div className="activityAddForm">
									<NewRoutineActivity userToken={userToken} id={id} />
									<br />
								</div>
								}
								</div>
						})
					}
				</div>
			</section>
        </div>
}

export default MyRoutines;