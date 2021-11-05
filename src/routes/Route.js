import { useContext } from "react"
import { Route, Redirect, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/auth"

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed, loading } = useContext(AuthContext)

  const location = useLocation()
  console.log(location.pathname === "/")


  if (loading) {
    return (
      <div></div>
    )
  }

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  if (signed && !isPrivate && location.pathname !== "/") {
    return <Redirect to="/dashboard" />
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  )
}