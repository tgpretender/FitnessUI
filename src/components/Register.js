import React, { useEffect, useState } from 'react';

const Register = (props) => {
    const {baseURL, setUsernameString, setIsAuthenticated, setUserToken} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser() {
        event.preventDefault();

        if (password.length < 8) {
             alert("Password Must Be At Least 8 Characters")
        }else{
     
        const response = await fetch(`${baseURL}users/register`, {
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
        }
    };

    return (
        <div className='logRegForm'>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
                <label>Username: </label><br />
                <input className="newInputLine"
                    type="username"
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value)
                    }}>
                </input>
                <br /><br />
                <label>Password: </label><br />
                <input className="newInputLine"
                    type="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}>
                </input>
                <br /><br />
                <button type="submit">Submit</button> 
            </form>
        </div>
    )
}

export default Register;