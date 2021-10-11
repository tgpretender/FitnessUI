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
		if(!response.ok) {
			alert("This activity is already included in your routine.");
			throw 'Duplication Error'
		} else {
			return location.reload();
		}
	})
		.catch(console.error);
}

async function editRoutineActivity(userToken, activityId, count, duration) {

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

async function deleteRoutineActivity(id, userToken) {
	const ID = id.routineActivityId;

	const response = await fetch(`${baseURL}routine_activities/${ID}`, {
		method: "DELETE",
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${userToken}`
		}
	})
		.then(res => res.json())
		.then((result) => { 
			if(result.success === true){
				return location.reload()
			} else {
				alert("You do not have permission to delete this routine activity!");
			}
		})
		.catch(err => console.error(err));
}

export { 
	addRoutineActivity,
	editRoutineActivity,
	deleteRoutineActivity
};