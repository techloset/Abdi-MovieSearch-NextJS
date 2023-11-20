// "use client";
// import { useState } from "react";
import { useRouter } from "next/router";

const SearchComponent = () => {
  // const [query, setQuery] = useState("");
  // const router = useRouter();

  // console.log("first", router.pathname);

  const handleSearch = (e) => {
    e.preventDefault();
    // props.onSearch(query);
  };

  // const data = await GET();

  // console.log("slug", data);

  return (
    <nav>
      <div className="flex flex-col md:flex-row gap-3 justify-between px-10 py-6 shadow-2xl items-center">
        <p className="text-blue-500 text-2xl font-bold">Movies Database</p>
        <form
          className="flex flex-wrap justify-center gap-1"
          autoComplete="off"
          onClick={handleSearch}
        >
          <input
            type="search"
            name="query"
            id="search"
            placeholder="Search a movie"
            className="px-10 py-2 md:py-4 border rounded-md m-0"
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-10 py-2 md:py-4 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export function GET(request) {
  request.nextUrl.searchParams.get("search-key");
}

export default SearchComponent;
