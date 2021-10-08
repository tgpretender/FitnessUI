import {useState} from 'react';
import { fetchActivities} from './';

const NewRoutine = (props) => {
	const { baseURL, userToken } = props;
	const [ newName, setNewName ] = useState('');
	const [ newGoal, setNewGoal ] = useState('');
	const [ newPublic, setNewPublic ] = useState(false);

	const activities = fetchActivities();

	const sendRoutine = async() => {
		event.preventDefault();
		const select = document.getElementById('selectedActivities');
		const selected = [...select.options]
			.filter(option => option.selected)
			.map(option => option.value);

		const response = await fetch(`${baseURL}/routines`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${userToken}`
			},
			body: JSON.stringify({
				name: newName,
				goal: newGoal,
				isPublic: newPublic,
			})
		})
		.then((response) => {
            console.log("response: ",response);
        })
			.catch(console.error);

		//second fetch for activties
		//add to routineUtils when i'm finished making it work
	
	}

	return <div className="newRoutineForm">
		<h2>Create a New Routine</h2>
		<form onSubmit={sendRoutine}>
			<label>Name: </label><br />
			<input className="newInputLine"
                type="text"
                value={newName}
                onChange={(event) => {
                    setNewName(event.target.value)
            }}></input>
			<br /><br />
			<label>Goal: </label><br />
			<input className="newInputLine"
                type="text"
                value={newGoal}
                onChange={(event) => {
                    setNewGoal(event.target.value)
            }}></input>
			<br /><br />
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
			<br /><br />
			<label>Activties: </label><br />
			<p>Hold down CTRL to select multiple activities.</p>
			<select id="selectedActivities" name="selectedActivities" multiple size="10">
				{
					activities.map((activity) => {
						const { id, name } = activity;
						return <option value={id} key={id}>{name}</option>
					})
				}
			</select>
			<br /><br />
			<button id="routineSubmit" type="submit">Submit</button>
		</form>
	</div>
}

export default NewRoutine;