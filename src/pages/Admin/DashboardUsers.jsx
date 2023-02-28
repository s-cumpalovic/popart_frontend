import React from "react";
import DashboardTable from "../../components/helpers/DashboardTable";
import { useQuery } from "react-query";
import { adminService } from "../../services/AdminService";
import Loader from "../../components/helpers/Loader";
import { Button } from "@mui/material";

const DashboardUsers = () => {
  const { isLoading, isError, error, data } = useQuery(
    ["users"],
    () => {
      return adminService.getUsers();
    },
    {
      refetchOnWindowFocus: true,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const users = data;

  return (
    <div>
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
      <DashboardTable data={users} tableType="users" />
    </div>
  );
};

export default DashboardUsers;
