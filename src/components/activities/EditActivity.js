import {useState} from 'react';

const EditActivity = (props) => {
	const { baseURL, id } = props;
	const [ newName, setNewName ] = useState('');
	const [ newDescription, setNewDescription ] = useState('');

	const sendEdit = () => {
		//editActivity(id, userToken, newName, newGoal, newPublic);

	}

	return <div className="form">
			<h3>Edit Activity</h3>
			<form onSubmit={sendEdit}>
				<label>Name: </label><br/>
				<input className="newInputLine"
                type="text"
                value={newName}
                onChange={(event) => {
                    setNewName(event.target.value)
            }}></input>
				<br/><br />
				<label>Description: </label><br />
				<input className="newInputLine"
                type="text"
                value={newDescription}
                onChange={(event) => {
                    setNewDescription(event.target.value)
            }}></input>
				<br /><br />
				<button id="routineSubmit" type="submit">Submit</button>
			</form>
		</div>
}

export default EditActivity