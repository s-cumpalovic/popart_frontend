import React from "react";
import DashboardTable from "../../components/helpers/DashboardTable";
import { useQuery } from "react-query";
import Loader from "../../components/helpers/Loader";
import { adminService } from "../../services/AdminService";
import Button from "@mui/material/Button";

const DashboardCategories = () => {
  const { isLoading, isError, error, data } = useQuery(
    ["users"],
    () => {
      return adminService.getCategories();
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

  const categories = data;

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
      <DashboardTable data={categories} tableType="categories" />
    </div>
  );
};

export default DashboardCategories;
