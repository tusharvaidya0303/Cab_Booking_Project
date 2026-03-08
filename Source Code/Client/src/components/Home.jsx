import NavBar from "./Navbar";
import cabIllustration from "../assets/cab-illustration.png";
import { useNavigate } from "react-router-dom";  // ✅ ADD THIS

const Home = () => {
  const navigate = useNavigate();  // ✅ ADD THIS

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-white flex flex-col">
      <NavBar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-12 flex-1">

        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
          Ride Smarter with <span className="text-black">SwiftCab</span>
        </h1>

        <p className="text-base md:text-lg text-gray-700 max-w-xl mb-6">
          Reliable. Fast. Affordable. Book your ride anytime, anywhere.
        </p>

        <div className="flex gap-3 flex-wrap justify-center mb-8">

          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white px-10 py-4 shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-medium"
          >
            Login to Continue
          </button>
        </div>

        <img
          src={cabIllustration}
          alt="SwiftCab Booking"
          className="w-full max-w-2xl"
        />

      </section>
    </div>
  );
};

export default Home;