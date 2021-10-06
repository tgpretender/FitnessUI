import React from 'react';
import { useState, useEffect } from 'react';

const Activities = (props) => {
	//let people search for routines that include a specific activitiy?
	const { baseURL } = props;
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
    }, []);
    
    return <div className="activities">
            <h1>Activities</h1>
            <p>These are all of the activities.</p>
			<div className="activitiesList">
				{
					publicActivities.map((activity,index) => {
						const { id, name, description } = activity;
						return <div key={id} className="activity">
							Name: {name}<br />
							Description: {description}
						</div>
					})
				}
			</div>
        </div>
}

export default Activities;