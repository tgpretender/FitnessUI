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
				alert("An activity with that name already exists!")
				throw 'Activity Exists Error'
			} else {
				return location.reload()
			}
		})
		.catch(console.error);
}

async function editActivity(userToken, id, name, description){
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
		.then(res => {
			if (res.error){
				alert("An activity with that name already exists!")
				throw 'Activity Exists Error'
			} else {
				return location.reload()
			}
		})
		.catch(err => console.error(err))

	return response;
}

export {
	addActivity,
	editActivity
}