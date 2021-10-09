import {useEffect, useState} from 'react';

const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';

async function editRoutine(id, userToken, name, goal, isPublic) {

	const response = await fetch(`${baseURL}/routines/${id}`, {
		method: "PATCH",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${userToken}`
		  },
		body: JSON.stringify({
			name: name,
			goal: goal,
			isPublic: isPublic
		})
	})
		.then(res => res.json())
		.then(res => console.log(res))
		// .then((result) => { 
		// 	console.log(result);
		// 	// if(result.ok === true){
		// 	//     return location.reload()
		// 	// } else {
		// 	//     alert("You do not have permission to edit this routine!");
		// 	// }
		// })
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
	editRoutine,
	deleteRoutine
};