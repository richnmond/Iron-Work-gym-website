const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member for 2 years",
    content: "Lost 40lbs and gained so much confidence. The trainers are amazing!",
    avatar: "SJ",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    role: "Business Owner",
    content: "The 24/7 access is perfect for my schedule. Best gym in the city!",
    avatar: "MR",
    rating: 5
  },
  {
    name: "Emma Chen",
    role: "Yoga Instructor",
    content: "Love the variety of classes. The community here is so supportive.",
    avatar: "EC",
    rating: 4
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">WHAT OUR MEMBERS SAY</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied members who transformed their lives at IronWorks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-2xl ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg italic mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">2,500+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Member Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-600">Weekly Classes</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-600 mb-2">10</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}