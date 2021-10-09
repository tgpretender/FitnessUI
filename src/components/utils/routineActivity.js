import React from 'react';

const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';

async function addRoutineActivity (userToken, routineId, activityId, count, duration) {

	const response = await fetch(`${baseURL}routines/${routineId}/activities`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${userToken}`
		},
		body: JSON.stringify({
			activityId: activityId,
			count: count,
			duration: duration
		})
	})
	.then((response) => {
		console.log("response: ",response);
		if(!response.ok) {
			alert("Something went wrong. Please try again.")
		} else {
			return location.reload();
		}
	})
		.catch(console.error);
}

async function editRoutineActivity(userToken, activityId, count, duration) {
	console.log("userToken: ", userToken)
	console.log("activityId: ", activityId);
	console.log("count: ", count);
	console.log("duration: ", duration);

	const response = await fetch(`${baseURL}routine_activities/${activityId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${userToken}`
		},
		body: JSON.stringify({
			count: count,
			duration: duration
		})
	}).then(res => res.json())
	.then((result) => { 
		return location.reload();
	})
		.catch(err => console.err(err));

}

const deleteRoutineActivity = () => {
	console.log("delete invoked");

}

export { 
	addRoutineActivity,
	editRoutineActivity,
	deleteRoutineActivity
};