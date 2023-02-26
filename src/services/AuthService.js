import { ApiService } from "./ApiService";
import { setItem, removeItem, getItem } from "../utils/helpers";

const ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout",
};

class AuthService extends ApiService {
  async login(user) {
    try {
      const response = await this.client.post(ENDPOINTS.LOGIN, user);
      setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async register(user) {
    try {
      const response = await this.client.post(ENDPOINTS.REGISTER, user);
      setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async logout(user) {
    try {
      const response = await this.client.post(ENDPOINTS.LOGOUT, user);
      removeItem("token");
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}

export const authService = new AuthService();
