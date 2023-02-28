import { ApiService } from "./ApiService";

const ENDPOINTS = {
  MAIN: "/users",
  CATEGORIES: "/categories",
};

class AdminService extends ApiService {
  async getUsers() {
    try {
      const response = await this.client.get(`${ENDPOINTS.MAIN}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getCategories() {
    try {
      const response = await this.client.get(`${ENDPOINTS.CATEGORIES}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export const adminService = new AdminService();
