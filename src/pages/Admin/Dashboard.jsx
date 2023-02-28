import React from "react";
import Button from "@mui/material/Button";

const Dashboard = () => {
  return (
    <div className="grid-container">
      <div className="landing-page">
        <h1 className="landing-header">Admin Dashboard</h1>
      </div>
      <div className="flex-container">
        <Button href="/dashboard/posts">Posts</Button>
        <Button href="/dashboard/users">Users</Button>
        <Button href="/dashboard/categories">Categories</Button>
      </div>
    </div>
  );
};

export default Dashboard;
