import React, { useState } from 'react';

const Login = ( ) => {

    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userToken, setUserToken] = useState('')

    function loginUser(username, password) {
        
        fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //user: {
                    username: username,
                    password: password
                //}
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                setIsAuthenticated (true)
                console.log(isAuthenticated)
                setUserToken(result.token)
                localStorage.setItem('token', result.token)
                return result
            })
            .catch(console.error)
    };

    function logoutUser() {
        setIsAuthenticated(false)
        setUserToken('')
        localStorage.clear()
    }

    return (
        <>
            <div className='Login'>
                <h1>Login</h1>

                <input className="usernameValue"
                    type="username"
                    value={usernameString}
                    onChange={function (event) {
                        setUsernameString(event.target.value);
                    }}>
                </input>

                <input className="passwordValue"
                    type="password"
                    value={passwordString}
                    onChange={function (event) {
                        setPasswordString(event.target.value);
                    }}>
                </input>


                <button className="loginBtn" onClick={() => {
                    loginUser(usernameString, passwordString)
                }
                }
                >Login</button> 

                <button className="logoutBtn" onClick={() => {
                    logoutUser()
                }}
                >Logout</button>


            </div>
        </>
    )
}


export default Login;