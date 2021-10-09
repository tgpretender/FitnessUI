import {useState} from 'react';
import { fetchActivities, addRoutineActivity } from '../';

const NewRoutineActivity = (props) => {
	const { userToken, id} = props;
	const [ newCount, setNewCount ] = useState(0);
	const [ newDuration, setNewDuration ] = useState(0);

	const activities = fetchActivities();

	const sendRoutineActivity = () => {
		event.preventDefault();
		const selector = document.getElementById("selectedActivities");
		const activityId = selector.options[selector.selectedIndex].value;

		addRoutineActivity(userToken, id, activityId, newCount, newDuration);
	}
	

	return <div>
		<br />
		<h3>Add a new Routine Activity</h3>
		<br />
		<form onSubmit={sendRoutineActivity}>
		<select id="selectedActivities" name="selectedActivities" size="10">
				{
					activities.map((activity) => {
						const { id, name } = activity;
						return <option value={id} key={id}>{name}</option>
					})
				}
			</select>
		<br /><br />
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
			<br /><br />
			<button id="activitySubmit" type="submit">Submit</button>
			<br />
		</form>
	</div>
};

export default NewRoutineActivity;