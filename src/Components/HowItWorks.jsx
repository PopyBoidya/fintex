import PropTypes from 'prop-types';

function Step({ number, title, description }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="relative p-8 z-10">
        <div className="flex items-center mb-6">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
            {number}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        </div>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function HowItWorks() {
  const steps = [
    {
      title: 'Create an Account',
      description: 'Sign up for free and complete your profile in minutes. Our user-friendly interface makes it easy to get started on your investment journey.',
    },
    {
      title: 'Deposit Funds',
      description: 'Add funds to your account using various secure payment methods. We support multiple currencies and offer competitive exchange rates.',
    },
    {
      title: 'Start Investing',
      description: 'Choose from a wide range of investment options tailored to your goals and risk tolerance. Our expert advisors are here to guide you every step of the way.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">How It Works</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">Get started with our simple three-step process and begin your journey to financial success.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

