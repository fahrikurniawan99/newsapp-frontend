import * as React from "react";
import Articles from "./articles";
import { useLocation, useNavigate } from "react-router-dom";

export default function HomePage() {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const URL = new URLSearchParams(location.search);

  return (
    <>
      <div className="text-center mb-5 mt-10">
        <h1 className="font-bold text-xl">Find The Latest News</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Input keywords here..."
          className="border outline-none px-5 py-3 rounded w-full max-w-md text-sm mt-3"
        />
        <div className="flex justify-center gap-2">
          <button
            disabled={!query.length}
            onClick={() => {
              navigate(`/?q=${query}`);
            }}
            className="rounded mt-3 block py-[10px] px-[20px] bg-gray-900 text-white text-sm disabled:opacity-50"
          >
            Find now
          </button>
          <button
            disabled={!URL.get("q")}
            onClick={() => {
              navigate(`/`);
            }}
            className="rounded mt-3 block py-[10px] px-[20px] bg-red-600 text-white text-sm disabled:opacity-50"
          >
            Delete keyword
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Articles />
      </div>
    </>
  );
}
