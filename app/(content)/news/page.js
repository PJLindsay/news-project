"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    setIsLoading(true);
    // you can call these async functions outside of the useEffect
    async function fetchNews() {
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news.");
        setIsLoading(false);
      }

      console.log("reponse ==> ", response);
      const news = await response.json();
      setNews(news);
      setIsLoading(false);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
