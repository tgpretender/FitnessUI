import React, { useEffect, useState } from 'react';

const Register = ({ setUserToken }) => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);


    async function registerUser(username, password, event) {
    //try{
    
        //event.preventDefault();
        if (password.length < 8) {
             alert("Password Must Be At Least 8 Characters")
        }else{
     
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //user: {
                    'username': username,
                    'password': password
                //},
            }),
        })
        //const data = await response.json();
        //return data
        //console.log('datadatadatadatadatadata', data)
        /*
         .then(response => response.json())
            
         .then(result => {
            console.log('datadatadatadatadatadata', result)

                if (result) {
                    const token = result.token;
                    setPasswordString('')
                    setUsernameString('')
                    setIsAuthenticated(true)
                    setUserToken(token)
                    //localStorage.setItem("token", token)
                    /*
                    if(results) {
                        const token = await results.token;
                        setUserToken(token);
                        setMyUsername(myUsername);
                        localStorage.setItem('userToken', token);
                        localStorage.setItem('myUsername', JSON.stringify(myUsername));
                    
                    }

                return data
        */
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        const token = result.token
                        console.log(result)
                        setIsAuthenticated(true)
                        setUserToken(token)
                        localStorage.setItem("token", token)
                    }
    
                    return result
                })
                .catch(console.error)
        }
        //catch(error){
        //    console.error(error)
        //}
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