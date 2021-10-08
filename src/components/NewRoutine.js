import {useState} from 'react';

const NewRoutine = (props) => {
	const { baseURL, userToken } = props;
	const [ newName, setNewName ] = useState('');
	const [ newGoal, setNewGoal ] = useState('');
	const [ newPublic, setNewPublic ] = useState(false);
	const [ newActivities, setNewActivity ] = useState('');

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
			<select id="activities">
				<option>None</option>
				<option>1</option>
				<option>2</option>
			</select>
			
			<br />

			<button type= "submit">Submit</button>
		</form>
	</div>
}

export default NewRoutine;