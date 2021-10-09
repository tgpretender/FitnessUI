import React, { useState } from 'react';
import { logUserIn } from './';

const Login = (props) => {
    const {baseURL, usernameString, setUsernameString, setIsAuthenticated, setUserToken} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser() {
        event.preventDefault();
        
        const response = await fetch(`${baseURL}users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: username,
                    password: password
            })
        }).then(response => response.json())
            .then(result => {
                if(result.token){
                setIsAuthenticated(true)
                setUserToken(result.token)
                setUsernameString(username)
                localStorage.setItem('token', result.token)
                localStorage.setItem('isLoggedIn', true)
                localStorage.setItem('username', username)
                location.reload();
                
                return result
                } else if(!result.token){
                    alert("Invalid username/password combination")
                }
            })
            .catch(console.error)
    };

    return (<div className='logRegForm'>
        <h2>Login</h2>
            <form onSubmit={loginUser}>
                <label>Username: </label><br />
                <input className="newInputLine"
                    type="username"
                    value={username}
                    onChange={function (event) {
                        setUsername(event.target.value);
                    }}>
                </input>
                <br /><br />
                <label>Password: </label><br />
                <input className="newInputLine"
                    type="password"
                    value={password}
                    onChange={function (event) {
                        setPassword(event.target.value);
                    }}>
                </input>
                <br /><br />

                <button id="loginButton" type="submit">Submit</button> 
            </form>
        </div>
    )
}


export default Login;