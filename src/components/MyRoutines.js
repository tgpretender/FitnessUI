import {useState} from 'react';

import {
	NewActivity,
	NewRoutine,
	fetchLoggedInUserRoutines,
	deleteRoutine,
	EditRoutine,
	NewRoutineActivity,
	EditRoutineActivity,
	deleteRoutineActivity
} from './';
const routineMap = new Map();
const routineActivityMap = new Map();
const editActivityMap = new Map();


const MyRoutines = (props) => {
	console.log('my routines ran again')
	const { baseURL, userToken, usernameString } = props;
	const [ showRoutineForm, setShowRoutineForm ] = useState(false);
	const [ showActivityForm, setShowActivityForm ] = useState(false);
	const [ showEditRoutine, setShowEditRoutine] = useState(false);
	const [ showAddRoutineActivity, setShowAddRoutineActivity] = useState(false);
	const [ showEditRoutineActivity, setShowEditRoutineActivity] = useState(false);
	const [ sendEditRoutine, setSendEditRoutine ] = useState([]);


	const routines = fetchLoggedInUserRoutines(usernameString, userToken);



    return <div>
        	<h1>{usernameString}'s Routines</h1>
			<section className="profileSection">
				<div className="profileDivs">
					{ showRoutineForm ? <button className="navLink" onClick={() => setShowRoutineForm(false)}>Hide</button> : 
					<button className="navLink" onClick={() => {
						setShowRoutineForm(true);
						setShowActivityForm(false);
						setShowEditRoutine(false);
						setShowAddRoutineActivity(false);
						setShowEditRoutineActivity(false);
						}}>Create New Routine</button>}

					{!showRoutineForm ? null : <NewRoutine baseURL={baseURL} userToken={userToken} />}
				</div>
				<div className="profileDivs">
					{ showActivityForm ? <button className="navLink" onClick={() => setShowActivityForm(false)}>Hide</button> : 
					<button className="navLink" onClick={() => {
						setShowActivityForm(true);
						setShowRoutineForm(false);
						setShowEditRoutine(false);
						setShowAddRoutineActivity(false);
						setShowEditRoutineActivity(false);
					}}>Create New Activity</button>}
					{!showActivityForm ? null : <NewActivity baseURL={baseURL} userToken={userToken} />}
				</div>
				<br />
				<div className="profileDivs">
					{ 
						routines.map((routine) => {
							const { id, isPublic, name, goal, activities} = routine;
							if(!routineMap.has(id)){
								routineMap.set(id, false);
							}
							
							if(!routineActivityMap.has(id)){
								routineActivityMap.set(id, false);
							}
							if(!editActivityMap.has(id)){
								editActivityMap.set(id, false);
							}
							return <div key={id} className="routine">
								<div className="routineHeader">
									<h3>{name}</h3>
								</div>
								<div className="routineInner">
								{
									isPublic ? <div className="publicRoutine">Public</div> : <div className="privateRoutine">Private</div>
								}
								<br />
								<label>Goal: </label>{goal}
								<br /><br />
								{ routineMap.get(id) ? <button className="navLink" onClick={() => {
									setShowEditRoutine(!showEditRoutine)
									routineMap.set(id, false);

									console.log('hide routines', routineMap);

								}
								}>Hide</button> : 
								
								<button className="navLink" onClick={() => {
									setShowRoutineForm(false);
									setShowActivityForm(false);
									setShowAddRoutineActivity(false);
									setShowEditRoutineActivity(false);

									const key = document.getElementById("editRoutine" + id);
									console.log(key);
									
									setShowEditRoutine(!showEditRoutine)
									routineMap.set(id, true);
								}}>Edit Routine</button>}
								{ !routineMap.get(id)  ? null : 
									<div>
										<br />
										<EditRoutine userToken={userToken} id={id} data-key={"editRoutine" + id}/>
										<br />
									</div>
								} 
								{ routineActivityMap.get(id) ? <button className="navLink" onClick={() => {
									setShowAddRoutineActivity(!showAddRoutineActivity);
									routineActivityMap.set(id, false);
								}}>Hide</button> : 
								<button className="navLink" onClick={() => {
									setShowAddRoutineActivity(!showAddRoutineActivity);
									setShowRoutineForm(false);
									setShowActivityForm(false);
									setShowEditRoutine(false);
									setShowEditRoutineActivity(false);
									routineActivityMap.set(id, true)
								}}>Add Activity</button>}
								{ !routineActivityMap.get(id) ? null : 
								<div className="activityAddForm">
									<br />
									<NewRoutineActivity userToken={userToken} id={id} />
									<br />
								</div>
								} 

								<button onClick={() => deleteRoutine({id}, userToken)}>Delete Routine</button>
								<br /><br />

								Activities: {
									activities.length === 0 ? "None" : 
									<div>
										{ 
											activities.map((activity) => {
												const { routineActivityId, name, descrition, count, duration  } = activity;
												return <div key={routineActivityId} className="routineListActivity">
												<div className="routineListActivityHeader">{name}</div>
												<div className="routineListActivityInner">
													<label>Description: </label>{descrition}<br />
													<label>Count: </label>{count}<br />
													<label>Duration: </label>{duration}
													<br /><br />
													
													{ editActivityMap.get(id) ? <button className="navLink" onClick={() =>{
														setShowEditRoutineActivity(!showEditRoutineActivity);
														editActivityMap.set(id, false)
													}}>Hide</button> : 
													<button className="navLink" onClick={() => {
														setShowEditRoutineActivity(!showEditRoutineActivity);
														setShowRoutineForm(false);
														setShowActivityForm(false);
														setShowEditRoutine(false);
														setShowAddRoutineActivity(false);
														editActivityMap.set(id, true)
													}}>Edit Activity</button>}
													{ !editActivityMap.get(id) ? null : 
														<div>
															<EditRoutineActivity userToken={userToken} routineActivityId={routineActivityId} />
															<br />
														</div>
													}
													
													<button onClick={() => deleteRoutineActivity({routineActivityId}, userToken)}>Delete Activity</button>
													<br /><br />
												</div>
												</div>
											})
										}
									</div>
								}
							</div>	
							</div>
						})
					}
					
				</div>
			</section>
        </div>
}

export default MyRoutines;