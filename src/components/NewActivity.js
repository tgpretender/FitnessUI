import {useState} from 'react';

const NewActivity = (props) => {
	const { userToken, allActivities, setAllActivities } = props;
	const [ newName, setNewName ] = useState('');
	const [ newDescription, setNewDescription] = useState('');

async function sendActivity() {
	console.log('sendActivity is running')
    const activityObj = {
        name: newName,
        description: newDescription
    }
    try {
        const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
            body: JSON.stringify(
                activityObj
            )
        })
		
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
		console.log('sendActivity is not running')
        console.error(error);
    }
}

async function send(e) {
    e.preventDefault();
        try {
            const results = await sendActivity();
            if(results.id) {
                setAllActivities([...allActivities]);
                location.reload();
            }
        } catch(error) {
            console.error(error)
    }
}


	return <div className="newActivityForm">
			<form onSubmit={send}>
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