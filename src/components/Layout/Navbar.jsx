import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useUser } from "../../hooks/useAuth";

export default function Navbar() {
  const { getUserFromLocalStorage } = useUser();
  const user = getUserFromLocalStorage().user;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            color="#2769e3"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Pop - Up!
          </Typography>
          <Button href="/posts" color="info">
            Posts
          </Button>
          {!user?.name ? (
            <>
              <Button href="/login" color="info">
                Login
              </Button>
              <Button href="/register" color="info">
                Register
              </Button>
            </>
          ) : (
            <>
              <Button href="/create" color="info">
                Create
              </Button>
              <Button href="/logout" color="info">
                Logout
              </Button>
            </>
          )}
          {user?.role === "admin" ? (
            <>
              <Button href="/dashboard" color="info">
                Dashboard
              </Button>
            </>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
