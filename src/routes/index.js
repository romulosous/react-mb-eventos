import { Switch } from "react-router-dom"

import Route from "./Route"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import UserEvents from "../pages/UserEvents"
import UserSubscribed from "../pages/UserSubscribed"
import Profile from "../pages/Profile"
import NewEvent from "../pages/NewEvent"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={SignUp} />

      <Route exact path="/events" component={UserEvents} isPrivate />
      <Route exact path="/registrations" component={UserSubscribed} isPrivate />
      <Route exact path="/new" component={NewEvent} isPrivate />
      <Route exact path="/profile" component={Profile} isPrivate />
    </Switch>
  )
}