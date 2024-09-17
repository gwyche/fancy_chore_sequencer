import { createBrowserRouter } from "react-router-dom"
import { Login } from "./Components/Login/Login"
import { ScheduleActions } from "./Components/Schedule/ScheduleActions"
import { Details } from "./Components/Details"
import { CreateAccount } from "./Components/Login/CreateAccount"
import { ScheduleCreate } from "./Components/Schedule/ScheduleCreate"

export const router = createBrowserRouter([
    { path: "/", element: <Login />},
    { path: "/scheduleActions", element: <ScheduleActions />},
    { path: "details", element: <Details />},
    { path: "createaccount", element: <CreateAccount />},
    { path: "scheduleCreate", element: <ScheduleCreate />}
])