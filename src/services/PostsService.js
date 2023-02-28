import { ApiService } from "./ApiService";

const ENDPOINTS = {
  MAIN: "/posts",
};

class PostsService extends ApiService {
  async getPosts(currPage = 1, terms = {}) {
    try {
      const queryParams = [];

      if (currPage) {
        queryParams.push(`current_page=${currPage}`);
      } else {
        queryParams.push("current_page=1");
      }

      const {
        title = "",
        description = "",
        price_from = "",
        price_to = "",
        state = "",
        location = "",
        category_id = "",
        page = 1,
        per_page = 15,
      } = terms;

      if (per_page !== 15) {
        queryParams.push(`per_page=${per_page}`);
      }

      if (title) {
        queryParams.push(`title=${title}`);
      }

      if (description) {
        queryParams.push(`description=${description}`);
      }

      if (price_from) {
        queryParams.push(`price_from=${price_from}`);
      }

      if (price_to) {
        queryParams.push(`price_to=${price_to}`);
      }

      if (state) {
        queryParams.push(`state=${state}`);
      }

      if (location) {
        queryParams.push(`location=${location}`);
      }

      if (category_id) {
        queryParams.push(`category_id=${category_id}`);
      }

      const queryString = queryParams.join("&");

      const response = await this.client.get(
        `${ENDPOINTS.MAIN}?${queryString}`
      );

      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getOnePost(id) {
    try {
      const response = await this.client.get(`${ENDPOINTS.MAIN}/${id}`);
      return response.data;
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
