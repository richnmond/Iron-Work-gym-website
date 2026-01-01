import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-full"></div>
              <span className="text-2xl font-bold">IRON<span className="text-red-600">WORKS</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Building stronger bodies and minds since 2010. Your fitness journey starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">CONTACT US</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <span className="mr-3">📍</span>
                123 Fitness Street, Gym City, 10001
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                (234) 700-1234
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                info@ironworksgym.com
              </li>
              <li className="flex items-center">
                <span className="mr-3">🕒</span>
                Open 24/7
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">NEWSLETTER</h3>
            <p className="text-gray-400 mb-4">
              Get fitness tips and exclusive offers straight to your inbox.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-3 rounded-l-lg flex-grow focus:outline-none"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-r-lg font-bold transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} IronWorks Gym. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> • 
            <a href="#" className="hover:text-white transition-colors ml-4">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}