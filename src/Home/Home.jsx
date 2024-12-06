import CallToAction from "../Components/CallToAction";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import HowItWorks from "../Components/HowItWorks";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";
import Testimonials from "../Components/Testimonials";

const Home = () => {

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Introduction />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

