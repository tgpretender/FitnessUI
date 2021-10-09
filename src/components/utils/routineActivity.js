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
/*
const editRoutineActivity = () => {

}

const deleteRoutineActivity = () => {

}
*/
export { 
	addRoutineActivity,
//	editRoutineActivity,
//	deleteRoutineActivity
};