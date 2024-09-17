import React from 'react'
import { Link } from 'react-router-dom'

const HomePage=()=> {
    return (
        <div className='home container'>
            <h1 className='heading'>Welcome to the chores</h1>
            <Link to='/signup' className='btn btn-primary btn-large'>Get Started</Link>
        </div>
    )
}
export default HomePage