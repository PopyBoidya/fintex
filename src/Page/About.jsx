import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import shahriar from '../assets/shahriar.png';
import popy from '../assets/popy.jpg';
import rifha from '../assets/rifha.jpg';
import nam_jani_na from '../assets/nam_jani_na.jpg';
import banner from '../assets/banner.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <OurMissionSection />
      <OurTeamSection />
      <OurValuesSection />
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative bg-blue-600 text-white py-32 overflow-hidden">
    <div className="absolute inset-0 bg-blue-700 opacity-50"></div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-5xl font-extrabold mb-6">About Us</h2>
        <p className="text-2xl mb-10 max-w-2xl mx-auto">We are on a mission to revolutionize the industry through innovation and excellence</p>
        <a href="#mission" className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold hover:bg-blue-100 transition duration-300 inline-block">
          Discover Our Mission
        </a>
      </motion.div>
    </div>
    <div className="absolute -bottom-[160px] left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </section>
);

const OurMissionSection = () => (
  <section id="mission" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Mission</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <p className="text-gray-600 text-lg leading-relaxed">
              At Our Company, we are driven by a singular purpose: to create innovative solutions that transform the way people interact with technology. We believe in the power of simplicity and accessibility, striving to make cutting-edge tools available to everyone.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Our mission extends beyond mere product development. We aim to foster a digital ecosystem where complexity is minimized, and human potential is maximized. Through our relentless pursuit of excellence and user-centric design, we are not just changing technology – we are changing lives.
            </p>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
            <img 
              src={banner}
              alt="Our Mission" 
              className="rounded-lg shadow-2xl hover:shadow-3xl transition duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const OurTeamSection = () => {
  const teamMembers = [
    { name: "Rifha tasniya", role: "CEO", image: rifha },
    { name: "Popy boidya", role: "CTO", image: popy },
    { name: "Pushpita ray", role: "Lead Designer", image: nam_jani_na },
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="w-full h-[40vh] object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                  <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const OurValuesSection = () => {
  const values = [
    { title: "Innovation", description: "We constantly push the boundaries of what's possible, embracing new ideas and technologies to create groundbreaking solutions." },
    { title: "Integrity", description: "We uphold the highest standards of honesty and ethics in all our interactions, building trust with our clients and partners." },
    { title: "Collaboration", description: "We believe in the power of teamwork and diverse perspectives, fostering an environment where every voice is heard and valued." },
    { title: "Excellence", description: "We strive for excellence in everything we do, setting high standards and continuously improving our skills and processes." },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:bg-blue-50 transition duration-300"
              >
                <h3 className="font-bold text-2xl mb-4 text-blue-600">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

