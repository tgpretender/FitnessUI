import {useState} from 'react';

const NewActivity = (props) => {
	const { userToken, allActivities, setAllActivities } = props;
	const [ newName, setNewName ] = useState('');
	const [ newDescription, setNewDescription] = useState('');

async function sendActivity() {
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
        if (data.error){
            alert("That Activity Already Exists")
            throw 'Activity Exists Error'
        } else {
            return data
        }
    } catch (error) {
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
	return <div className="form">
        <h2>Create a New Activity</h2>
			<form onSubmit={send}>
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

