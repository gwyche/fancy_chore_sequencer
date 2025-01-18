import { createBrowserRouter } from "react-router-dom"
import { Login } from "./Components/Authentication/Login"
import { ScheduleActions } from "./Components/DashboardAndSchedule/SchedulePages/ScheduleActions"
import { Details } from "./Components/Details"
import { CreateAccount } from "./Components/Authentication/CreateAccount"
import { ScheduleCreate } from "./Components/DashboardAndSchedule/SchedulePages/ScheduleCreate"

export const router = createBrowserRouter([
    { path: "/", element: <Login />},
    { path: "/scheduleActions", element: <ScheduleActions />},
    { path: "details", element: <Details />},
    { path: "createaccount", element: <CreateAccount />},
    { path: "scheduleCreate", element: <ScheduleCreate />}
])