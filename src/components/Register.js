import React, { useEffect, useState } from 'react';

const Register = ({ setIsAuthenticated, setUserToken }) => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');
    

    function registerUser(username, password) {

        fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //user: {
                    username: username,
                    password: password
                //},
            }),
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setIsAuthenticated(true)
                    setUserToken(result.token)
                    localStorage.setItem("token", result.token)
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