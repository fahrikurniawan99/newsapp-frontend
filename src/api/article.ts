import axios from "axios";
import { config } from "../utils/config";
import { Article } from "../data/useArticle";

const apiKey = config.newsApiKey;

interface BreakingNewsResponse {
  data: Article[];
  total: number;
  error: unknown;
}

export const ArticleApi = {
  async getBreakingNews(q: string): Promise<BreakingNewsResponse> {
    try {
      const response = await axios.get(`${config.newApiUrl}/top-headlines`, {
        params: {
          country: "us",
          apiKey,
          q,
        },
      });
      return {
        data: response.data.articles,
        total: response.data.articles.totalResults,
        error: "",
      };
    } catch (error: unknown) {
      return {
        data: [],
        total: 0,
        error,
      };
    }
  },
};
