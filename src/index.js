import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import UserProvider from "./hooks/useAuth";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "../src/layout";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <DefaultLayout>
            <App />
          </DefaultLayout>
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
