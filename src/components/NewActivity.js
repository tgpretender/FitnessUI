import {useState} from 'react';

const NewActivity = (props) => {
	//event.preventDefault;
	const { baseURL, userToken } = props;
	const [ newName, setNewName ] = useState('');
	const [ newDescription, setNewDescription] = useState('');

	const sendActivity = async () => {
		//event.preventDefault;
		const response = await fetch(`${baseURL}/activities`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${userToken}`
			},
			body: JSON.stringify({
				name: newName,
				description: newDescription
			})
		}).then(res => res.json())
		  .then(res => console.log(res))
		  
		  .catch(console.error);
	}

	return <div className="newActivityForm">
			<form onSubmit={sendActivity}>
				<label>Name: </label><br />
				<input className="newActivityName"
                type="text"
				name="name" 
                value={newName}
                onChange={(event) => {
                    setNewName(event.target.value)
            }}></input>
				<br />
				<label>Description: </label><br />
				<input className="newDescription"
                type="text"
				name="description" 
                value={newDescription}
                onChange={(event) => {
                    setNewDescription(event.target.value)
            }}></input>
				<br />
			<button type= "submit">Submit</button>
			</form>
		</div>
}

export default NewActivity;