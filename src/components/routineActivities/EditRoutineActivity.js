import {useState} from 'react';
import { editRoutineActivity } from '../';

const EditRoutineActivity = (props) => {
	const { userToken, routineActivityId} = props;
	const [ newCount, setNewCount ] = useState(0);
	const [ newDuration, setNewDuration ] = useState(0);

	const sendEditRoutineActivity = () => {
		event.preventDefault();
		editRoutineActivity(userToken, routineActivityId, newCount, newDuration);
	}

	return <div className="form">
		<br />
		<h3>Edit the routine activity</h3><br />
		<form onSubmit={sendEditRoutineActivity}>
			<label>Count: </label><br />
			<input className="newInputNumber"
                type="number"
                value={newCount}
                onChange={(event) => {
                    setNewCount(event.target.value)
            }}></input>
			<br /><br />
			<label>Duration: </label><br />
			<input className="newInputNumber"
                type="number"
                value={newDuration}
                onChange={(event) => {
                    setNewDuration(event.target.value)
            }}></input>
			<br />
			<br />
			<button id="activitySubmit" type="submit">Submit</button>
		</form>
	</div>
};

export default EditRoutineActivity;