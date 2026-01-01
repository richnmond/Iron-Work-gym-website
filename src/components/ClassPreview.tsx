const classes = [
  { name: 'CrossFit', time: '6:00 AM', trainer: 'Alex', spots: 5 },
  { name: 'Yoga', time: '8:00 AM', trainer: 'Sarah', spots: 8 },
  { name: 'HIIT', time: '5:30 PM', trainer: 'Mike', spots: 3 },
  { name: 'Spin', time: '6:30 PM', trainer: 'Jamie', spots: 10 },
]

export default function ClassPreview() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">POPULAR CLASSES</h2>
          <p className="text-gray-400">Join our most booked sessions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {cls.spots} spots left
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{cls.name}</h3>
              <div className="text-gray-400 mb-4">
                <div className="flex items-center mb-2">
                  <span className="mr-2">🕒</span>
                  {cls.time}
                </div>
                <div className="flex items-center">
                  <span className="mr-2">👤</span>
                  Trainer {cls.trainer}
                </div>
              </div>
              
              <button className="w-full bg-white text-black hover:bg-gray-200 py-3 rounded-lg font-bold transition-colors">
                BOOK NOW
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-3 rounded-lg font-bold transition-colors">
            VIEW FULL SCHEDULE
          </button>
        </div>
      </div>
    </section>
  )
}