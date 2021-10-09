import {useState} from 'react';
import { addRoutine } from '../';

const NewRoutine = (props) => {
	const { userToken } = props;
	const [ newName, setNewName ] = useState('');
	const [ newGoal, setNewGoal ] = useState('');
	const [ newPublic, setNewPublic ] = useState(false);

	const sendRoutine = () => {
		event.preventDefault();
		addRoutine(userToken, newName, newGoal, newPublic);
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
			<button id="routineSubmit" type="submit">Submit</button>
		</form>
	</div>
}

export default NewRoutine;