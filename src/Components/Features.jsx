import PropTypes from 'prop-types';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative p-8 z-10">
        <div className="text-5xl mb-6 text-blue-500 group-hover:text-white transition-colors duration-300">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Features() {
  const features = [
    {
      icon: '💰',
      title: 'Easy Deposits',
      description: 'Securely deposit funds with just a few clicks.',
    },
    {
      icon: '🔄',
      title: 'Quick Withdrawals',
      description: 'Access your funds whenever you need them.',
    },
    {
      icon: '📈',
      title: 'Smart Investments',
      description: 'Grow your wealth with our intelligent investment strategies.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Our Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

