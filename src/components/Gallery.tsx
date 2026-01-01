const galleryImages = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", alt: "Weight Training Area" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", alt: "Cardio Section" },
  { src: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b", alt: "Group Class" },
  { src: "https://images.unsplash.com/photo-1576678927484-cc9079570c5f", alt: "Personal Training" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f", alt: "Swimming Pool" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f", alt: "Yoga Studio" },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">OUR FACILITY</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art equipment across 25,000 sq. ft. of premium fitness space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold">{image.alt}</h3>
                  <p className="text-sm mt-2">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center text-red-600 font-bold text-lg">
            VIEW FULL GALLERY
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}