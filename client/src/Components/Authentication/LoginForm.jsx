import { useState } from "react"


export function Login () {
    // Create credentials state
    const {credentials, setCredentials} = useState({
        username : "",
        passsword : ""
    })

    
    // Destructure login method and isAuthenticated state

    // Create a function to handle input changes
    const handleChange = (e) =>{
        // Destructure the name and value from the input field
        const {name, value} = e.target
        // Set the credentials state with the name and value
        setCredentials({...credentials, [name] : value})
    }
    
    return (
        <>
        <h1>Login</h1>
        <form>
            <input className="username" required placeholder="username"></input>
            <input className="password" required placeholder="password"></input>
            <button type="submit">Submit</button>
        </form>
        <Link to="/CreateAccount">Create Account</Link>
        </>
        
    )
}