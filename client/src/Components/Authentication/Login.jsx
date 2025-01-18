import { Link } from "react-router-dom"

export function Login () {


    return (
        <>
        <h1>hello!</h1>
        <form>
            <input className="username" required placeholder="username"></input>
            <input className="password" required placeholder="password"></input>
            <button type="submit">Submit</button>
        </form>
        <Link to="/CreateAccount">Create Account</Link>
        </>
        
    )
}