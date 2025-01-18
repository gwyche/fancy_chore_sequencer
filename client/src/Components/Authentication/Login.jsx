import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export function Login () {
    // Create credentials state
    const {credentials, setCredentials} = useState({
        username : "",
        passsword : ""
    })

    // Destructure login method and isAuthenticated state

    // Create a function to handle input changes

    // // Login method
    // const login = async (credentials) => {
    //     // Request credentials from the server
    //     try {
    //         const response = await axios.post("fancychores.com/credentials", {
    //             username : credentials.username,
    //             password : credentials.password
    //         });
    //         // If the response is successful, set the isAuthenticated state to true and navigate to the dashboard
    //     } 
        
    //     catch (error) {
    //         console.log("Something went wrong\n", error)    
    //     } 
    // }

    


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