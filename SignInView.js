import {  useState } from 'react'


export const SignInView = () => {
    
    const [username, setUsername] = useState('Rajwinder')
    const [password, setPassword] = useState('')


    return (
        <div>
             <h1>{username}</h1>
            <span>Username: </span> <input onChange={event => setUsername(event.target.value)}/> <br></br>
            <span>Password: </span>  <input onChange={event => setPassword(event.target.value)} />
        </div>
    )  
 
}   
    


