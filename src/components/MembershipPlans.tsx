const plans = [
  {
    name: 'BASIC',
    price: '$29',
    period: '/month',
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Free wifi',
      'Basic workout plan',
      'Limited to 2 classes/week'
    ],
    popular: false,
    color: 'gray'
  },
  {
    name: 'PRO',
    price: '$59',
    period: '/month',
    features: [
      'Everything in Basic',
      'Unlimited classes',
      '2 personal training sessions',
      'Nutrition consultation',
      'Access to all facilities',
      'Bring a friend once/week'
    ],
    popular: true,
    color: 'red'
  },
  {
    name: 'ELITE',
    price: '$99',
    period: '/month',
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Custom meal plans',
      '24/7 access',
      'Massage therapy (2 sessions)',
      'Priority booking',
      'Private locker'
    ],
    popular: false,
    color: 'black'
  }
]

export default function MembershipPlans() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">CHOOSE YOUR PLAN</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible membership options designed for every fitness level. No long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative rounded-2xl p-8 border-2 hover-lift transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-600 shadow-2xl transform scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold cta-btn ${
                plan.popular
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-gray-900 hover:bg-black text-white'
              }`}>
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600">
          <p>✅ All plans include free trial • ✅ No signup fees • ✅ Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}