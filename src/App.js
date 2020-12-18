import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Dashboard from "./views/Dashboard"
import Login from "./views/Login"


const authGuard = (Component) => () => {
  return localStorage.getItem("user") ? (
    <Component />
  ) : (
    <Redirect to='/login' />
  )
}

const isLogin = (Component) => () => {
  return localStorage.getItem("user") ? (
    <Redirect to='/' />
    ) : (
    <Component />
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={isLogin(Login)} />
        <Route path="/dashboard" component={authGuard(Dashboard)} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
