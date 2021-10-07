import React, { useEffect, useState } from 'react';

const Register = ({ setUserToken }) => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);


    async function registerUser(username, password) {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            }),
        })
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        const token = result.token
                        console.log(result)
                        setIsAuthenticated(true)
                        setUserToken(token)
                        localStorage.setItem("token", token)
                        localStorage.setItem('isLoggedIn', true)
                        localStorage.setItem('username', username)
                        location.reload();
                    }
    
                    return result
                })
                .catch(console.error)

    };

    return (
        <>
            <div className='Register'>

                <h1>Register</h1>

                <input className="usernameValue"
                    type="username"
                    value={usernameString}
                    onChange={(event) => {
                        setUsernameString(event.target.value)
                    }}>
                </input>

                <input className="passwordValue"
                    type="password"
                    value={passwordString}
                    onChange={(event) => {
                        setPasswordString(event.target.value);
                    }}>
                </input>

                <button className="registerbtn" onClick={
                    () => {
                        registerUser(usernameString, passwordString)

                    }}
                >Register</button>

            </div>
        </>
    )
   
}

export default Register;