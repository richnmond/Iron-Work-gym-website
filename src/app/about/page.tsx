'use client';

import Image from 'next/image';

export default function AboutPage() {
  const trainers = [
    { name: 'Alex Johnson', specialty: 'Strength & Conditioning', experience: '10 years', bio: 'Former professional athlete', src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop" },
    { name: 'Sarah Lee', specialty: 'Yoga & Mobility', experience: '8 years', bio: 'Certified yoga instructor', src: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=400&fit=crop' },
    { name: 'Mike Chen', specialty: 'HIIT & Weight Loss', experience: '12 years', bio: 'Nutrition specialist', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  ] 

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">OUR STORY</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, IronWorks started as a small garage gym with one mission: 
              to make premium fitness accessible to everyone.
            </p> 
            <p className="text-lg text-gray-700 mb-6">
              Today, we're a 25,000 sq. ft. facility serving over 2,500 members with 
              state-of-the-art equipment, expert trainers, and a supportive community.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">OUR VALUES</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-we">✓</span>
                </div>
                <span className="font-medium">Inclusive community for all fitness levels</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">✓</span>
                </div>
                <span className="font-medium">Evidence-based training methods</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">✓</span>
                </div>
                <span className="font-medium">24/7 access for maximum flexibility</span>
              </li>
            </ul> 
          </div>
        </div>

        <div className="mt-20">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            MEET OUR TRAINERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={trainer.src}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{trainer.specialty}</p>
                  <p className="text-gray-600 mb-4">{trainer.bio}</p>
                  <div className="text-gray-500">Experience: {trainer.experience}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}