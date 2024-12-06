import banner from '../assets/banner.png';

function Introduction() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Welcome to Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                Fintex Investment Platform
              </span>
            </h1>
            <p className="text-xl mb-10 text-blue-100 max-w-lg">
              Experience the future of financial management with our cutting-edge solutions. Unlock your potential and achieve your financial goals.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-50"
            >
              Get Started
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src={banner}
                alt="Platform Preview"
                className=""
              />
             
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Introduction;

