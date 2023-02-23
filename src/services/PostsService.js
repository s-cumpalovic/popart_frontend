import { ApiService } from "./ApiService";

const ENDPOINTS = {
  MAIN: "/posts",
};

class PostsService extends ApiService {
  async getPosts() {
    try {
      const response = await this.client.get(`${ENDPOINTS.MAIN}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getOnePost(id) {
    try {
      const response = await this.client.get(`${ENDPOINTS.MAIN}/${id}`);
      return response.data.data; // As pagination is not needed only returns the data of a specific post;
    } catch (err) {
      console.error(err);
    }
  }

  async createPost(post) {
    try {
      const response = await this.client.post(`${ENDPOINTS.MAIN}`, post);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
  async editPost(id, post) {
    try {
      const response = await this.client.patch(`${ENDPOINTS.MAIN}/${id}`, post);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deletePost(id) {
    try {
      const response = await this.client.delete(`${ENDPOINTS.MAIN}/${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export const postsService = new PostsService();
