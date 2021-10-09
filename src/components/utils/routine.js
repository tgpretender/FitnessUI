import React from 'react';

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
<<<<<<< HEAD:src/components/routineUtils.js
	const ID = id.id;
	const routineObj = {
		'name': name,
		'goal': goal,
		'isPublic': isPublic
	}
=======
	const bodyParts = {}
>>>>>>> 94a29b0ca2222a6a7d8e83e24ce8fea14c6e62f0:src/components/utils/routine.js

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
<<<<<<< HEAD:src/components/routineUtils.js
		body: JSON.stringify({
			routineObj
		})
=======
		body: JSON.stringify(
			bodyParts
		)
>>>>>>> 94a29b0ca2222a6a7d8e83e24ce8fea14c6e62f0:src/components/utils/routine.js
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