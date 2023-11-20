import Navbar from "@/app/(components)/Navbar";
import Image from "next/image";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.AUTH_TOKEN,
  },
};

async function getData(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }) => {
  const id = params.movieId;
  const movie = await getData(id);

  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <Navbar />
      <div className="flex flex-col py-10 px-4 justify-center items-center">
        <div className=" md:w-[700px] h-fit bg-slate-200 rounded flex flex-col items-center shadow-2xl px-10 py-8">
          <img
            src={
              !movie.poster_path
                ? "/img/noImageLandscape.jpg"
                : API_IMG + movie.backdrop_path
            }
            className="rounded-xl"
            alt={movie.title}
          />
          <h1 className="text-3xl 2xl:text-5xl font-bold text-center mt-6">
            {movie.title}
          </h1>
          <div className="flex flex-col gap-3 mt-3 justify-center">
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <Image src="/img/star.png" width={20} height={20} alt="icon" />
              <p className="opacity-50">{movie.vote_average}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <Image
                src="/img/calender.png"
                width={20}
                height={20}
                alt="icon"
              />
              <p className="opacity-50">{movie.release_date}</p>
            </div>
          </div>
          <p className=" md:text-2xl leading-loose tracking-wide text-center">
            {movie.overview}
          </p>
          <Link
            href="/"
            className="text-xl mt-7 text-blue-400 hover:text-blue-500"
          >
            Go back to Home.{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
