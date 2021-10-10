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

const MyRoutines = (props) => {
	console.log('my routines ran again')
	const { baseURL, userToken, usernameString } = props;
	const [ showRoutineForm, setShowRoutineForm ] = useState(false);
	const [ showActivityForm, setShowActivityForm ] = useState(false);
	const [ showEditRoutine, setShowEditRoutine] = useState(false);
	const [ showAddRoutineActivity, setShowAddRoutineActivity] = useState(false);
	const [ showEditRoutineActivity, setShowEditRoutineActivity] = useState(false);
	const [ activeKey, setActiveKey] = useState('');

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
							console.log('this is my routineMap', routineMap)


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
									//setShowEditRoutine(true)
									routineMap.set(id, false);
									//location.reload();

									console.log('hide routines', routineMap);

								}
								}>Hide</button> : 
								<button className="navLink" onClick={() => {
									setActiveKey(id);

									setShowRoutineForm(false);
									setShowActivityForm(false);
									setShowAddRoutineActivity(false);
									setShowEditRoutineActivity(false);

									const key = document.getElementById("editRoutine" + id);
									console.log(key);
									
									setShowEditRoutine(!showEditRoutine)
									routineMap.set(id, true);

									console.log('edit routines', routineMap);
								}}>Edit Routine</button>}
								{ !routineMap.get(id)  ? null : 
									<div>
										<br />
										<EditRoutine userToken={userToken} id={id} data-key={"editRoutine" + id}/>
										<br />
									</div>
								} 
								{ showAddRoutineActivity ? <button className="navLink" onClick={() => setShowAddRoutineActivity(false)}>Hide</button> : 
								<button className="navLink" onClick={() => {
									setShowAddRoutineActivity(true);
									setShowRoutineForm(false);
									setShowActivityForm(false);
									setShowEditRoutine(false);
									setShowEditRoutineActivity(false);
								}}>Add Activity</button>}
								{ !showAddRoutineActivity ? null : 
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
													
													{ showEditRoutineActivity ? <button className="navLink" onClick={() =>
														setShowEditRoutineActivity(false)}>Hide</button> : 
													<button className="navLink" onClick={() => {
														setShowEditRoutineActivity(true);
														setShowRoutineForm(false);
														setShowActivityForm(false);
														setShowEditRoutine(false);
														setShowAddRoutineActivity(false);
													}}>Edit Activity</button>}
													{ !showEditRoutineActivity ? null : 
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