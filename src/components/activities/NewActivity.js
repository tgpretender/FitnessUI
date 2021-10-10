import { useState } from 'react';
import { addActivity } from '../'

const NewActivity = (props) => {
	const { userToken } = props;
	const [ newName, setNewName ] = useState('');
	const [ newDescription, setNewDescription] = useState('');

    const sendActivity = () => {
        event.preventDefault();
        addActivity(userToken, newName, newDescription);
    }

	return <div className="form">
        <h2>Create a New Activity</h2>
			<form onSubmit={sendActivity}>
				<label>Name: </label><br />
				<input className="newInputLine"
                type="text"
				name="name" 
                value={newName}
                onChange={(event) => {
                    setNewName(event.target.value)
            }}></input>
				<br /><br />
				<label>Description: </label><br />
				<input className="newInputLine"
                type="text"
				name="description" 
                value={newDescription}
                onChange={(event) => {
                    setNewDescription(event.target.value)
            }}></input>
				<br /><br />
			<button type= "submit">Submit</button>
			</form>
		</div>
}

export default NewActivity;

