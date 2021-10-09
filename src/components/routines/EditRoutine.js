import { useState } from 'react';
import { editRoutine } from '../index'

const EditRoutine = (props) => {
	const { userToken, id } = props;
	const [ newName, setNewName ] = useState('');
	const [ newGoal, setNewGoal ] = useState('');
	const [ newPublic, setNewPublic ] = useState(false);

	const sendEdit = () => {
		editRoutine(id, userToken, newName, newGoal, newPublic);
	}

	return <div className="form">
		<h3>Edit Routine</h3>
		<br />
		<form onSubmit={sendEdit}>
			<label>New Name: </label><br />
			<input className="newInputLine"
                type="text"
                value={newName}
                onChange={(event) => {
                    setNewName(event.target.value)
            }}></input>
			<br /><br />
			<label>New Goal: </label><br />
			<input className="newInputLine"
                type="text"
                value={newGoal}
                onChange={(event) => {
                    setNewGoal(event.target.value)
            }}></input>
			<br /><br />
			<label>Make Public? </label>
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

export default EditRoutine;