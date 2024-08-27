import { createBrowserRouter } from "react-router-dom"
import { Login } from "./Components/Login/Login"
import { ScheduleInitiation } from "./Components/Schedule/ScheduleInitiation"
import { Details } from "./Components/Details"
import { CreateAccount } from "./Components/Login/CreateAccount"

export const router = createBrowserRouter([
    { path: "/", element: <Login />},
    { path: "/initiate", element: <ScheduleInitiation />},
    { path: "details", element: <Details />},
    { path: "createaccount", element: <CreateAccount />}
])