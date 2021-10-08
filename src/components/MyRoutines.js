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

	async function editRoutine(id) {
		const ID = id.id;
		const response = await fetch(`${baseURL}/routines/${ID}`, {
			method: "PATCH",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${userToken}`
			  },
			body: {
				name: newName,
				goal: newGoal,
				isPublic: newPublic
			}
		})
			.then(res => res.json())
            .then((result) => { 
				console.log(result);
                // if(result.ok === true){
                //     return location.reload()
                // } else {
                //     alert("You do not have permission to edit this routine!");
                // }
            })
            .catch(err => console.error(err));
	}

	async function deleteRoutine(id) {
		const ID = id.id;
		const response = await fetch(`${baseURL}/routines/${ID}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`
            }
    	})
            .then(res => res.json())
            .then((result) => { 
                if(result.ok === true){
                    return location.reload()
                } else {
                    alert("You do not have permission to delete this routine!");
                }
            })
            .catch(err => console.error(err));
    }
	
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
								Activities: {
									activities.length === 0 ? "None" : "yes"
								}
								<br /><br />
								<button>Edit Routine</button>
								<button onClick={() => deleteRoutine({id})}>Delete Routine</button>
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