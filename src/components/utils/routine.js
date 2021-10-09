import {useEffect, useState} from 'react';

const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';

async function addRoutine(userToken, name, goal, isPublic) {
	const response = await fetch(`${baseURL}/routines`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${userToken}`
		},
		body: JSON.stringify({
			name: name,
			goal: goal,
			isPublic: isPublic,
		})
	})
	.then((response) => {
		console.log("response: ",response);
		if(response.ok) {
			return location.reload();
		} else {
			alert("Something went wrong. Please try again.")
		}
	})
		.catch(console.error);
}

async function editRoutine(id, userToken, name, goal, isPublic) {
	const bodyParts = {}

	if(name){
		bodyParts["name"] = name;
	}
	if(goal){
		bodyParts["goal"] = goal;
	}
	bodyParts["isPublic"] = isPublic;
	const response = await fetch(`${baseURL}/routines/${id}`, {
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
		.then((result) => { 
			return location.reload();
		})
		.catch(err => console.error(err));
		return response;
}

async function deleteRoutine(id, userToken) {
	const ID = id.id;
	const response = await fetch(`${baseURL}/routines/${ID}`, {
		method: "DELETE",
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${userToken}`
		}
	})
		.then(res => res.json())
		.then((result) => { 
			console.log(result);
			if(result.success === true){
				return location.reload()
			} else {
				alert("You do not have permission to delete this routine!");
			}
		})
		.catch(err => console.error(err));
}

export {
	addRoutine,
	editRoutine,
	deleteRoutine
};