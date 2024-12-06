import PropTypes from 'prop-types';

function PricingCard({ title, price, features, isPopular }) {
  return (
    <div className={`relative bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${isPopular ? 'border-2 border-blue-500' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg transform translate-x-2 -translate-y-2 rotate-45">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-extrabold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-5xl font-bold mb-6 text-gray-900">
          ${price}
          <span className="text-lg text-gray-500 font-normal">/month</span>
        </p>
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button className={`w-full py-3 px-6 rounded-full font-bold text-lg transition-all duration-300 ${
          isPopular
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        } transform group-hover:scale-105`}>
          Choose Plan
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPopular: PropTypes.bool,
};

function Pricing() {
  const plans = [
    {
      title: 'Basic',
      price: 9.99,
      features: [
        'Up to $10,000 investment',
        'Basic analytics dashboard',
        'Email support (24/7)',
        'Access to educational resources',
      ],
    },
    {
      title: 'Pro',
      price: 19.99,
      features: [
        'Up to $50,000 investment',
        'Advanced analytics with AI insights',
        'Priority phone & email support',
        'Personalized investment strategies',
        'Quarterly portfolio review',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 49.99,
      features: [
        'Unlimited investment amount',
        'Custom analytics and reporting',
        'Dedicated account manager',
        'Access to exclusive investment opportunities',
        'Monthly strategy sessions',
        'Tax optimization services',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">Investment Plans</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan to accelerate your financial growth and achieve your investment goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

