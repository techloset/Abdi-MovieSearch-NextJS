// "use client";
import Card from "../(components)/Card";
import Navbar from "../(components)/Navbar";

async function getData() {
  const res = await fetch(process.env.API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const data = await getData();

  const mapData = data.results;

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-2 justify-center bg-gradient-to-r from-cyan-400 to-blue-500 py-4 px-3">
        <Card mapData={mapData} />
      </div>
    </>
  );
};

export default page;
