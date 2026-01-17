import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: '5 Beginner Mistakes to Avoid in Your Fitness Journey',
    excerpt: 'Starting your fitness journey? Learn common pitfalls and how to avoid them for lasting results.',
    category: 'Fitness Tips',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b'
  },
  {
    id: 2,
    title: 'Nutrition Guide for Muscle Building',
    excerpt: 'Discover the essential nutrients and meal timing strategies to maximize your gains.',
    category: 'Nutrition',
    date: 'Jan 10, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af'
  },
  {
    id: 3,
    title: 'How to Stay Motivated: A 30-Day Challenge',
    excerpt: 'Join our 30-day motivation challenge and build sustainable workout habits.',
    category: 'Mindset',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1576678927484-cc9079570c5f'
  },
  {
    id: 4,
    title: 'The Science of HIIT Training',
    excerpt: 'Understanding why High-Intensity Interval Training is so effective for fat loss.',
    category: 'Workouts',
    date: 'Dec 28, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b'
  },
  {
    id: 5,
    title: 'Recovery Techniques for Athletes',
    excerpt: 'Explore advanced recovery methods to reduce soreness and improve performance.',
    category: 'Recovery',
    date: 'Dec 20, 2023',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
  },
  {
    id: 6,
    title: 'Building a Home Workout Routine',
    excerpt: 'Create an effective home workout plan with minimal equipment.',
    category: 'Home Workouts',
    date: 'Dec 15, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f'
  },
]

const categories = ['All', 'Fitness Tips', 'Nutrition', 'Workouts', 'Recovery', 'Mindset', 'Success Stories']

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">IRONWORKS BLOG</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert advice, success stories, and the latest fitness science to help you reach your goals.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button 
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category === 'All' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured
                </span>
                <h2 className="text-4xl font-bold mb-6">Transform Your Body in 90 Days: A Complete Guide</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our most comprehensive guide covering workout plans, nutrition strategies, and mindset shifts for dramatic transformations.
                </p>
                <div className="flex items-center text-gray-300 mb-8">
                  <span className="mr-6">By Coach Alex</span>
                  <span>Jan 20, 2024 • 12 min read</span>
                </div>
                <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-bold transition-colors">
                  READ FULL ARTICLE
                </button>
              </div>
              <div className="bg-gray-300 min-h-[400px]">
                {/* Featured image would go here */}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-300 relative">
                {/* Image overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-red-600 cursor-pointer">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <button className="text-red-600 font-bold hover:underline">
                    Read More →
                  </button>
                  <div className="flex">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gray-200 rounded-full -ml-2 border-2 border-white"></div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Get weekly fitness tips, workout plans, and exclusive member offers delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow px-6 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-black hover:bg-gray-900 px-8 py-3 rounded-r-lg font-bold transition-colors">
              SUBSCRIBE
            </button>
          </div>
          
          <p className="text-red-200 text-sm mt-4">
            No spam ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}