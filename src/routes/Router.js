import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Guest/Login";
import { useUser } from "../hooks/useAuth";
import Register from "../pages/Guest/Register";
import Homepage from "../pages/Homepage";
import SinglePost from "../pages/SinglePost";
import Dashboard from "../pages/Admin/Dashboard";
import DashboardUsers from "../pages/Admin/DashboardUsers";
import Logout from "../pages/Logout";
import DashboardPosts from "../pages/Admin/DashboardPosts";
import DashboardCategories from "../pages/Admin/DashboardCategories";
import CreatePost from "../pages/CreatePost";

const Router = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { getUserFromLocalStorage } = useUser();
  const user = getUserFromLocalStorage().user;
  useEffect(() => {
    checkUser();
  }, [user]);

  const isCustomer = user && user.role === "customer";
  const isAdmin = user && user.role === "admin";
  const checkUser = () => {
    if (user) {
      setIsAuth(true);
    } else {
      //   setIsAuth(false);
    }
  };

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
      <Route exact path="/posts">
        <Homepage />
      </Route>
      <Route path="/posts/:id">
        <SinglePost />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/create">
        <CreatePost />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      {isAdmin && (
        <>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/users">
            <DashboardUsers />
          </Route>
          <Route exact path="/dashboard/posts">
            <DashboardPosts />
          </Route>
          <Route exact path="/dashboard/categories">
            <DashboardCategories />
          </Route>
        </>
      )}
    </Switch>
  );
};

export default Router;
