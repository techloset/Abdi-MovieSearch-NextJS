import Image from "next/image";
import Link from "next/link";

const Card = ({ mapData }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      {mapData.map((movie) => (
        <div
          key={movie.id}
          className="card w-96 bg-white rounded-lg shadow-2xl"
        >
          <figure className="px-2 pt-2">
            <Image
              src={API_IMG + movie.poster_path}
              className="rounded-xl"
              width={384}
              height={100}
              alt={movie.title}
              priority
            />
          </figure>
          <div className="card-body p-2 text-center">
            <h2 className="card-title">{movie.title}</h2>
            <div className="flex gap-1 justify-center items-center">
              <Image src="/img/star.png" width={20} height={20} alt="icon" />
              <p className="opacity-50">{movie.vote_average}</p>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <Image
                src="/img/calender.png"
                width={20}
                height={20}
                alt="icon"
              />
              <p className="opacity-50">{movie.release_date}</p>
            </div>
            <div className="card-actions mt-3 flex">
              <Link
                href={`/movies/${movie.id}`}
                className="btn w-full py-2 bg-blue-600 rounded-md text-white"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
