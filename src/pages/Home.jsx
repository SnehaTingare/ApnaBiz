const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center px-5">
      
      <h1 className="text-4xl font-bold mb-3">
        Discover Local Businesses in Nashik
      </h1>

      <p className="text-gray-500 text-base mb-7 max-w-xl">
        Find grocery stores, medical shops, salons, and agriculture essentials near you.
      </p>

      <div className="flex w-full max-w-xl">
        <input
          type="text"
          placeholder="Search for shops, services, or categories..."
          className="flex-1 px-4 py-3 text-base border border-gray-300 rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-3 bg-blue-600 text-white text-base rounded-r-md hover:bg-blue-700 transition">
          Search
        </button>
      </div>

    </div>
  );
};

export default Home;
