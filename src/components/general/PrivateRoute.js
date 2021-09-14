import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../hooks/AuthContext.js"

//Creates private route in order to protect pages, which should not be entered without been logged in
const PrivateRoute = ({ component: Component, ...rest })=> {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}

export default PrivateRoute