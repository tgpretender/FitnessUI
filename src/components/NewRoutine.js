import {useState} from 'react';

const NewRoutine = (props) => {
	const { baseURL, userToken } = props;
	const [ newName, setNewName ] = useState('');
	const [ newGoal, setNewGoal ] = useState('');
	const [ newPublic, setNewPublic ] = useState('');
	const [ newActivities, setNewActivity ] = useState('');

	const sendRoutine = () => {

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
				id="public"
				value={newPublic} 
				onChange={(event) => {
					setNewPublic(event.target.value)
			}}></input>
			<br />
			<label>Activties: </label><br />

			<button type= "submit">Submit</button>
		</form>
	</div>
}

export default NewRoutine;