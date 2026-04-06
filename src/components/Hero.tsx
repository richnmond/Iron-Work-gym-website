export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')] bg-cover bg-center opacity-20"
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
        >
          BUILD YOUR <span className="text-red-600">BEST</span> SELF
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          State-of-the-art equipment, expert trainers, and a community that pushes you to your limits.
        </p>
      
        <div 
          className="flex flex-col md:flex-row gap-6 justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-lg text-lg font-bold cta-btn">
            START FREE TRIAL
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-black px-10 py-4 rounded-lg text-lg font-bold btn-hover">
            VIEW CLASSES
          </button>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-center hover-lift rounded-lg p-4">
            <div className="text-5xl font-bold text-red-600">50+</div>
            <div className="text-gray-400">Modern Equipment</div>
          </div>
          <div className="text-center hover-lift rounded-lg p-4">
            <div className="text-5xl font-bold text-red-600">15+</div>
            <div className="text-gray-400">Expert Trainers</div>
          </div>
          <div className="text-center hover-lift rounded-lg p-4">
            <div className="text-5xl font-bold text-red-600">24/7</div>
            <div className="text-gray-400">Open Access</div>
          </div>
        </div>
      </div>
    </section>
  )
}