import React, { useEffect } from "react";
import { useUser } from "../hooks/useAuth";
import { Switch, Redirect } from "react-router-dom";

const Logout = () => {
  const { logout } = useUser();
  useEffect(() => {
    handleLogout();
  });

  const handleLogout = () => {
    logout();
  };
  alert("Logged out succesfully!");
  return (
    <div>
      {" "}
      <Redirect to={{ pathname: "/login" }} />;
    </div>
  );
};

export default Logout;
