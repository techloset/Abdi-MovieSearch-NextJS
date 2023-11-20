import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col md:flex-row gap-3 justify-between px-10 py-6 shadow-2xl items-center">
        <Link href="/" className="text-blue-500 text-2xl font-bold">
          Movies Database
        </Link>
        <Link
          href="/"
          className="bg-blue-500 text-2xl p-2 rounded-md text-white font-bold"
        >
          Go To Homepage
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
