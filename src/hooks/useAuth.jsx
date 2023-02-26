import React, { createContext, useContext, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { authService } from "../services/AuthService";
import { setItem, removeItem, getItem } from "../utils/helpers";
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const getUserFromLocalStorage = () => {
  const token = getItem("token");
  const user = JSON.parse(getItem("user"));

  return { token, user };
};

const setUserInLocalStorage = ({ token, user }) => {
  setItem("token", token);
  setItem("user", JSON.stringify(user));
};

const removeUserFromLocalStorage = () => {
  removeItem("token");
  removeItem("user");
};

const login = async (user) => {
  const response = await authService.login(user);
  setUserInLocalStorage({ user: response.user, token: response.token });
  return response;
};

const register = async (user) => {
  const response = await authService.register(user);
  setUserInLocalStorage({ user: response.user, token: response.token });
  return response;
};

const logout = async () => {
  const token = getUserFromLocalStorage().token;
  const response = await authService.logout(token);
  removeUserFromLocalStorage();
  return response;
};

const UserProvider = ({ children }) => {
  const { data, isError, isLoading } = useQuery(
    "user",
    getUserFromLocalStorage
  );

  useEffect(() => {
    if (isError) {
      removeUserFromLocalStorage();
    }
  }, [isError]);

  const value = {
    user: data?.user,
    token: data?.token,
    isError,
    login,
    register,
    logout,
    getUserFromLocalStorage,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
