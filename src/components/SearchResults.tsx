import { useEffect, useState } from "react";
import ResultItem from "./ResultItem";

type ApiResponse = {
  meta: {
    found: number;
  }
  data: Array<{
    uuid: string;
    title: string;
    description: string;
    url: string;
    image_url: string;
    published_at: string;
    source: string;
    categories: string[];
  }>
}

export default function SearchResults({ searchValue }: { searchValue: string }) {
  const API_URL = import.meta.env.VITE_API_URL || ''
  const API_TOKEN = import.meta.env.VITE_API_TOKEN || ''
  const [news, setNews] = useState<ApiResponse | null>(null);

  async function fetchNews() {
    const fetchNews = await fetch(API_URL + "?" + new URLSearchParams({
      api_token: API_TOKEN,
      language: 'en',
      search: searchValue
    }))
    if (!fetchNews.ok) {
      return
    }
    const req: ApiResponse = await fetchNews.json()
    setNews(req)
  }

  useEffect(() => {
    fetchNews()
  }, [searchValue]);

  if (news?.meta.found === 0) {
    return <h1>No results found</h1>
  }

  return (
    <>
      {news?.data.map(newsItem => (
        <div key={newsItem.uuid} className="mb-5">
          <ResultItem
            title={newsItem.title}
            description={newsItem.description}
            url={newsItem.url}
            image_url={newsItem.image_url}
            published_at={newsItem.published_at}
            source={newsItem.source}
            categories={newsItem.categories}
          />
        </div>
      ))}
    </>
  )
}