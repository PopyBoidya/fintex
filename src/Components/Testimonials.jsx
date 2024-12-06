import PropTypes from 'prop-types';
import aveter from '../assets/aveter.jpg';
const Testimonial = ({ name, role, company, quote, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
          />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{role} at {company}</p>
          </div>
        </div>
        <blockquote className="text-gray-700 italic flex-grow">{quote}</blockquote>
        <div className="mt-4 flex justify-end">
          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      quote: "This investment platform has revolutionized our company's financial strategy. The insights provided are invaluable.",
      image: aveter,
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      company: "StartUp Inc.",
      quote: "As a first-time investor, I found this platform incredibly user-friendly and educational. It's helped me grow my portfolio significantly.",
      image: aveter,
    },
    {
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      company: "WealthWise",
      quote: "I recommend this platform to all my clients. The range of investment options and the analytical tools are top-notch.",
      image: aveter,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">What Our Clients Say</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Discover how our platform has helped investors achieve their financial goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

