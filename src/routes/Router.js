import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Guest/Login";
import { useUser } from "../hooks/useAuth";
import Register from "../pages/Guest/Register";
import Logout from "../pages/Logout";

const Router = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { getUserFromLocalStorage } = useUser();
  const user = getUserFromLocalStorage().user;
  useEffect(() => {
    checkUser();
  }, [user]);

  const checkUser = () => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  console.log(user);
  console.log(isAuth);
  const AuthRoute = ({ children, ...rest }) => {
    return (
      <Route {...rest}>{isAuth ? children : <Redirect to="/login" />}</Route>
    );
  };
  const GuestRoute = ({ children, ...rest }) => {
    return <Route {...rest}>{!isAuth ? children : <Redirect to="/" />}</Route>;
  };
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
    </Switch>
  );
};

export default Router;
