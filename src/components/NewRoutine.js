import {useState} from 'react';
import { fetchActivities} from './';

const NewRoutine = (props) => {
	const { baseURL, userToken } = props;
	const [ newName, setNewName ] = useState('');
	const [ newGoal, setNewGoal ] = useState('');
	const [ newPublic, setNewPublic ] = useState(false);
	const [ newActivities, setNewActivity ] = useState('');

	const activities = fetchActivities();

	

	const sendRoutine = async() => {
		event.preventDefault();
		console.log("name: ", newName);
		console.log("goal: ", newGoal);
		console.log("public: ", newPublic);
		console.log("activities: ", newActivities);
		
		// const response = await fetch(`${baseURL}/routines`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'Authorization': `Bearer ${userToken}`
		// 	},
		// 	body: JSON.stringify({
		// 		name: newName,
		// 		goal: newGoal,
		// 		isPublic: newPublic,
		// 		activities: newActivities
		// 	})
		// }).then(res => res.json())
		//   .then(res => console.log(res))
		//   .catch(console.error);
	}

	return <div className="newRoutineForm">
		<form onSubmit={sendRoutine}>
			<label>Name: </label><br />
			<input className="newRoutineName"
                type="text"
                value={newName}
                onChange={(event) => {
                    setNewName(event.target.value)
            }}></input>
			<br />
			<label>Goal: </label><br />
			<input className="newGoal"
                type="text"
                value={newGoal}
                onChange={(event) => {
                    setNewGoal(event.target.value)
            }}></input>
			<br />
			<label>Keep Public? </label>
			<input type="checkbox" 
				id="publicCheckbox"
				value="false" 
				onChange={() => {
					const box = document.querySelector('input[id="publicCheckbox"');
					if(box.checked){
						setNewPublic(true);
					} else {
						setNewPublic(false);
					}
				}}></input>
			<br />
			<label>Activties: </label><br />
			<p>Hold down CTRL to select multiple activities.</p>
			<select id="selectedActivities" name="selectedActivities" multiple size="10">
				<option value="none">None</option>
				{
					activities.map((activity, index) => {
						const { id, name } = activity;
						return <option value={name} key={id}>{name}</option>
					})
				}
			</select>
			
			<br />

			<button type= "submit">Submit</button>
		</form>
	</div>
}

export default NewRoutine;