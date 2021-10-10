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

async function editActivity(userToken, id, name, description){
	console.log("id: ", id);
	console.log("name: ", name);
	console.log("description: ", description);

	const bodyParts = {}

	if(name){
		bodyParts["name"] = name;
	}
	if(description){
		bodyParts["description"] = description;
	}
	const response = await fetch(`${baseURL}/activities/${id}`, {
		method: "PATCH",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${userToken}`
		  },
		body: JSON.stringify(
			bodyParts
		)
	})
		.then(res => res.json())
		.then(res => console.log(res))
		.catch(err => console.error(err))

	return response;
}

async function deleteActivity(activityId){
	//might not need????
}

export {
	addActivity,
	editActivity
}