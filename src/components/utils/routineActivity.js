import React from 'react';

const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';

async function addRoutineActivity (userToken, routineId, activityId, count, duration) {
	const response = await fetch(`${baseURL}/routines/${routineId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${userToken}`
		},
		body: {
			activityId: activityId,
			count: count,
			duration: duration
	}
	.then(response => response.json())
	.then(result => {
		console.log(result);
	})
	.catch(console.error)
	});
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