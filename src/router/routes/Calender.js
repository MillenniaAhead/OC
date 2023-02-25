import { lazy } from "react"

const CalenderRoute = [
  {
    path: "/calender",
    component: lazy(() => import("../../views/Calender/Calender"))
  }
]

export default CalenderRoute
