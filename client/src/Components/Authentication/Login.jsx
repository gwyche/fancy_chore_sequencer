import { Link } from "react-router-dom"

export function Login () {
    // Create credentials state
    const {credentials, setCredentials} = useState({
        username : "",
        passsword : ""
    })

    // Destructure login method and isAuthenticated state

    // Create a function to handle input changes
    
    


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