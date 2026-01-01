export default function ClassesPage() {
  const schedule = [
    { day: 'Monday', classes: [
      { name: 'Morning Yoga', time: '6:00 AM', trainer: 'Sarah', level: 'Beginner' },
      { name: 'HIIT Blast', time: '7:30 AM', trainer: 'Mike', level: 'Advanced' },
      { name: 'Strength Training', time: '5:30 PM', trainer: 'Alex', level: 'All Levels' },
    ]},
    { day: 'Tuesday', classes: [
      { name: 'Spin Class', time: '6:30 AM', trainer: 'Jamie', level: 'Intermediate' },
      { name: 'Boxing', time: '6:00 PM', trainer: 'Chris', level: 'Advanced' },
    ]},
    // Add more days...
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">CLASS SCHEDULE</h1>
        <p className="text-gray-600 mb-12">Book your favorite classes or try something new!</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {schedule.map((daySchedule, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-red-600">{daySchedule.day}</h3>
              <div className="space-y-4">
                {daySchedule.classes.map((cls, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{cls.name}</h4>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                        {cls.level}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>🕒 {cls.time}</span>
                      <span>👤 {cls.trainer}</span>
                    </div>
                    <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                      BOOK NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}