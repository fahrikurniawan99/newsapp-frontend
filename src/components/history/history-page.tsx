import { Link } from "react-router-dom";
import { Article } from "../../data/useArticle";

export default function HistoryPage() {
  const articles = JSON.parse(localStorage.getItem("histories") ?? "[]");

  return (
    <div className="mb-10">
      <p className="text-red-400 mt-10 font-medium">Welcome to</p>
      <h1 className="font-bold text-2xl">Your Histories</h1>
      <p className="text-gray-400 text-sm">
        This page displays your news history that you have visited for some
        time.
      </p>
      {articles.length ? (
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          {articles
            .map((article: Article) => (
              <div className="flex">
                <img
                  src={article.urlToImage}
                  className="h-40 w-[40%] object-cover shrink-0 rounded"
                />
                <div className="ml-5 h-full flex flex-col">
                  <h1 className="font-bold underline line-clamp-4">
                    {article.title}
                  </h1>
                  <Link
                    to={article.url}
                    rel="noreferrer"
                    target={"_blank"}
                    className="rounded mt-auto flex justify-center py-[10px] px-[20px] bg-gray-900 text-white text-sm"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      ) : (
        <div className="mt-5 bg-yellow-100 w-fit text-yellow-600 px-8 py-4 rounded-lg text-center flex items-center gap-3">
          <span className="text-2xl">&#9888;</span>
          <p>
            No news you've read yet.
            <Link to={"/"} className="font-medium ml-1 underline">
              Click this to read the news
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
