import React from "react";
import Router from "./routes/Router";
import Navbar from "./components/Layout/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Router />
    </div>
  );
};

export default layout;
