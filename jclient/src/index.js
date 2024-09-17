import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/Navbar'
import HomePage from './components/Home'
import './styles/main.css'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import SignUpPage from './components/SignUp'
import LoginPage from './components/Login'
import CreateRecipePage from './components/CreateChore'

const App=()=> {

    return(
        <Router>
        <div className=''>
            <NavBar/>
            <Routes>
                <Route path='/create_chores' element={<CreateRecipePage></CreateRecipePage>}>
                    
                </Route>
                <Route path='/login' element={<LoginPage></LoginPage>}>
                    
                </Route>
                <Route path='/signup' element={<SignUpPage></SignUpPage>}>
                    
                </Route>
                <Route path="/" element={<HomePage/>}>
                    
                </Route>
                
            </Routes>
        </div>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));