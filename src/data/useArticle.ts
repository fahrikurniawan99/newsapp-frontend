import * as React from "react";
import { useLocation } from "react-router-dom";
import { ArticleApi } from "../api/article";

export interface Article {
  source: {
    id: null | string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export default function useArticle() {
  const chunkSize = 5;
  const [data, setData] = React.useState<Article[][]>([]);
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();
  const URL = new URLSearchParams(location.search);
  const query = URL.get("q");

  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await ArticleApi.getBreakingNews(query as string);
      const chunks = [];
      for (let i = 0; i < response.data.length; i += chunkSize) {
        const chunk = response.data.slice(i, i + chunkSize);
        chunks.push(chunk);
      }
      setData(chunks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
  };
}
