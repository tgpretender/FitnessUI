import {useEffect, useState} from 'react';

const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';

const fetchRoutines = () => {
	const [ publicRoutines, setPublicRoutines ] = useState([]);
	useEffect(() => {
		fetch(`${baseURL}/routines`, {
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		})
		.then(res => res.json())
		.then((res) => {
			const response = res;
			setPublicRoutines(response);
		})
		.catch(err => console.error(err))
}, []);
	return publicRoutines;
}

const fetchActivities = () => {
	const [ publicActivities, setPublicActivities ] = useState([]);
	useEffect(() => {
        fetch(`${baseURL}/activities`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then((res) => {
            const response = res;
            setPublicActivities(response);
        })
        .catch(err => console.error(err))
    }, [])
	return publicActivities;
}

const fetchLoggedInUserRoutines = (usernameString, userToken) => {
	const [ userRoutines, setUserRoutines] = useState([]);
	useEffect(() => {
        fetch(`${baseURL}/users/${usernameString}/routines`, {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${userToken}`
			}
        })
        .then(res => res.json())
        .then((res) => {
            const response = res;
            setUserRoutines(response);
        })
        .catch(err => console.error(err))
    }, []);
	return userRoutines;
}

const fetchSelectedUserRoutines = (username) => {
	const [ userRoutines, setUserRoutines] = useState([]);
	useEffect(() => {
        fetch(`${baseURL}/users/${username}/routines`, {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json'
			}
        })
        .then(res => res.json())
        .then((res) => {
            const response = res;
            setUserRoutines(response);
        })
        .catch(err => console.error(err))
    }, []);
	return userRoutines;
}

//fetch all routine activity that matches that activityId
//

export {
	fetchRoutines,
	fetchActivities,
	fetchSelectedUserRoutines,
	fetchLoggedInUserRoutines
};