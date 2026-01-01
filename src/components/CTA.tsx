export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          READY TO TRANSFORM YOUR LIFE?
        </h2>
        
        <p className="text-xl text-gray-300 mb-10">
          Start your fitness journey today with our 7-day free trial. No commitment required.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl">
            CLAIM FREE TRIAL
          </button>
          
          <div className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            No credit card required • Cancel anytime
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-800">
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-4">🏆</div>
            <h4 className="font-bold text-lg mb-2">Award Winning</h4>
            <p className="text-gray-400 text-sm">Best Gym 2023 City Award</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
            <h4 className="font-bold text-lg mb-2">Family Friendly</h4>
            <p className="text-gray-400 text-sm">Kids area & family discounts</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-4">🛡️</div>
            <h4 className="font-bold text-lg mb-2">Safe & Clean</h4>
            <p className="text-gray-400 text-sm">24/7 security & daily sanitization</p>
          </div>
        </div>
      </div>
    </section>
  )
}