import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const LoginPage=()=> {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const userBody ={
        username:username,
        password:password
    }

    const requestOptions={
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(userBody)
    }

    const loginUser=()=>{
        console.log(username)
        console.log(password)
        fetch('/auth/login', requestOptions)
            .then(res=>res.json())
            .then(data=>console.log(data))
            .then(err=>console.log(err))
        
        setUsername('')
        setPassword('')
    }

    return (
        <div className='container'>
        <div className='form'>
            <h1>Login</h1>
            <form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder='Your user name'
                    value={username} name='username' onChange={(e)=>{setUsername(e.target.value)}}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Your Password'
                    value={password} name='password' onChange={(e)=>{setPassword(e.target.value)}}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Button onClick={loginUser} as="sub" variant='primary'>Login</Button>
                </Form.Group>
                <Form.Group>
                    <small>
                        Do not have an account? <Link to='/signup'>Sign Up</Link>
                    </small>
                </Form.Group>
            </form>
        </div>
    </div>
    )
}
export default LoginPage