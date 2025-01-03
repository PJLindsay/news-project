import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

// Note this is a Server component (RSC) -- we reach out to database (only on server)
export default async function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
