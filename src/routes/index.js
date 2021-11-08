import { Switch } from "react-router-dom"

import Route from "./Route"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"
import UserEvents from "../pages/UserEvents"
import Profile from "../pages/Profile"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={SignUp} />

      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/events" component={UserEvents} isPrivate />
      <Route exact path="/profile" component={Profile} isPrivate />
    </Switch>
  )
}