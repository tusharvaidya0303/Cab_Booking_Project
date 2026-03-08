import Unav from './Unav';
import { useNavigate } from 'react-router-dom';
import rideBanner from "../../assets/EnjoyYourRide.png"

const Uhome = () => {
    const navigate = useNavigate();

    return (
            <div className="bg-amber-100 min-h-screen font-sans">
      <Unav />

      <div className="max-w-6xl mx-auto px-6 text-center py-16">
        
        <h1 className="text-gray-800 text-5xl font-bold mb-6">
          Welcome to SwiftCab
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          SwiftCab is your trusted transportation partner. Whether you need a
          quick ride to work, an airport transfer, or a comfortable trip across
          town, we make every journey smooth, safe, and affordable.
        </p>

        <div className="flex justify-center mb-12">
          <img
            src={rideBanner}
            alt="Enjoy Your Ride"
            className="h-[450px] w-full max-w-4xl object-cover rounded-2xl shadow-lg"
          />
        </div>
<button
  onClick={() => navigate('/cabs')}
  className="bg-black text-white 
             px-10 py-3 
             rounded-full 
             text-lg font-medium 
             tracking-wide
             hover:bg-gray-800
             transition-all duration-300
             shadow-lg hover:shadow-2xl
             hover:-translate-y-1 active:translate-y-0"
>
  Book Ride →
</button>
            </div>
            <br />

            <div className="flex flex-col md:flex-row items-center md:justify-between px-4 mt-12">
                <img
                    src='src/assets/home2.webp'
                    alt="Reserve a Ride"
                    className="h-[400px] object-cover w-full md:w-auto rounded-md shadow-md mb-8 md:mb-0"
                />
                <div className="md:pl-8 md:mt-0 mt-4 text-center md:text-left">
                    <h1 className="text-gray-800 text-4xl font-bold mb-4">Reserve a ride that's ready when you are</h1>
                    <p className="text-gray-700 text-lg mt-4 px-4 max-w-4xl mx-auto">
                        Now more than ever, reservations are a way of life. Reserve a premium Uber experience, up to 90 days in advance, for whenever you’re ready to ride.
                    </p>
                </div>
            </div>

            <div className="mt-12 px-4">
            <h1 className="text-gray-800 text-4xl font-bold text-center mb-8">
                Why use the SwiftCab app?
            </h1>

            <div className="flex justify-center">
                <img
                src="src/assets/home1.svg"
                alt="Why Ride With Us"
                className="w-full max-w-3xl h-auto rounded-2xl shadow-md"
                />
            </div>


                {/* Cards layout */}
            <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                
                <div className="bg-amber-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-gray-800 text-2xl font-semibold mb-3">
                    Rides on demand
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                    Request a ride at any time and on any day of the year.
                </p>
                </div>

                <div className="bg-amber-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-gray-800 text-2xl font-semibold mb-3">
                    Budget-friendly options
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                    Compare prices on every kind of ride, from daily commutes to special evenings out.
                </p>
                </div>

                <div className="bg-amber-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-gray-800 text-2xl font-semibold mb-3">
                    An easy way to get around
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                    Tap and let your driver take you where you want to go.
                </p>
                </div>

            </div>
            </div>
            </div>


            <footer className="bg-gray-900 text-white pt-12 pb-6 mt-20">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                
                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                    Contact Us
                    </h3>
                    <p className="mb-2 text-gray-300">📧 support@ucab.com</p>
                    <p className="text-gray-300">📞 +1-123-456-7890</p>
                </div>

                {/* Follow */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                    Follow Us
                    </h3>
                    <p className="mb-2 text-gray-300">
                    🌐{" "}
                    <a
                        href="http://www.ucab.com"
                        className="text-blue-400 hover:text-blue-300 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.swiftcab.com
                    </a>
                    </p>
                    <p className="text-gray-300">
                    📱 Social Media Links
                    </p>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                    Help & Support
                    </h3>
                    <div className="flex flex-col space-y-2">
                    <a href="/faqs" className="text-blue-400 hover:text-blue-300 transition">
                        FAQs
                    </a>
                    <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition">
                        Privacy Policy
                    </a>
                    <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300 transition">
                        Terms of Service
                    </a>
                    </div>
                </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                <p className="text-lg font-medium mb-2">
                    SwiftCab App – Your Trusted Transportation Partner
                </p>
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} SwiftCab. All rights reserved.
                </p>
                </div>

            </div>
            </footer>
        </div>
    );
};

export default Uhome;