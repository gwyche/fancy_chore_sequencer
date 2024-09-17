import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const SignUpPage=()=> {

    const {register,watch,handleSubmit,reset,formState:{errors}} = useForm();
    const isValidEmailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
    const submitForm =(data)=> {
        if(data.password != data.confirmPassword) {
            alert('The passwords need to match!')
            return
        }

        const userBody ={
            username:data.username,
            email:data.email,
            password:data.password
        }

        const requestOptions={
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userBody)
        }
        fetch('/auth/signup', requestOptions)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .then(err=>console.log(err))
        reset()
    }
    //console.log(watch("username"))
    return (
        <div className='container'>
            <div className='form'>
                <h1>Sign Up</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder='Your user name'
                        {...register("username", {required:true,maxLength:25})}
                        
                        ></Form.Control>
                        {errors.username?.type==="required" && <span class='text-danger'>Username is required</span>}
                        {errors.username?.type==="maxLength"&&<span class="text-danger">Please do not enter a username longer than 25 characters</span>}
                    </Form.Group>
                    
                    <br/>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Your Email'
                        {...register("email", {required:true,maxLength:80})}
                        ></Form.Control>
                        {errors.email?.type==="required" && <span class='text-danger'>Please enter an email</span>}
                        {errors.email?.type==="maxLength"&& <span class='text-danger'>Please use an email no more than 80 characters</span>}
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Your Password'
                        {...register("password", {required:true,minLength:8})}
                        ></Form.Control>
                         {errors.password?.type==="required" && <span class='text-danger'>Password is required</span>}
                         {errors.password?.type==="minLength" && <span class='text-danger'>Password must be at least 8 characters</span>}
                    </Form.Group>
                    <br/>
                    
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' placeholder='Confirm Your Password'
                        {...register("confirmPassword", {required: true, minLength: 8})}></Form.Control>
                         {errors.confirmPassword?.type==="required" && <span class='text-danger'>Please confirm your password</span>}
                         {errors.confirmPassword?.type==="minLength" && <span class='text-danger'>Password must be at least 8 characters</span>}
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Button onClick={handleSubmit(submitForm)} as="sub" variant='primary'>Sign Up</Button>
                    </Form.Group>
                    <small>
                        Already have an account? <Link to='/login'>Log in</Link>
                    </small>
                </form>
            </div>
        </div>
    )
}
export default SignUpPage