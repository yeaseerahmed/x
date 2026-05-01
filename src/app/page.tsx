import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center border border-white/20">
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Apps
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          Built by <span className="font-semibold text-white">Raja</span>
        </p>

        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-purple-100 transition duration-300">
          Explore Apps
        </button>

      </div>

    </div>
  );
}