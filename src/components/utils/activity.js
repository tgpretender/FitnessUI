import React from 'react';

const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';

async function addActivity(userToken, name, description){
	const response = await fetch(`${baseURL}/activities`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${userToken}`
		},
		body: JSON.stringify({
			name: name,
			description: description
		})
	})
		.then(res => res.json())
		.then(res => {
			if (res.error){
				alert("That Activity Already Exists")
				throw 'Activity Exists Error'
			} else {
				return location.reload()
			}
		})
		.catch(console.error);
}

async function editActivity(name, description){

}

async function deleteActivity(activityId){
	//might not need????
}

export {
	addActivity,
	editActivity
}