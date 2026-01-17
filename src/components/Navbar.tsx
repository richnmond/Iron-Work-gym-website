import Link from 'next/link'

export default function Navbar() {
  const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Classes', href: '/classes' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
 ]
 
  return (
    <nav className="fixed w-full bg-black/90 text-white z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-600 rounded-full"></div>
          <span className="text-2xl font-bold">IRON<span className="text-red-600">WORKS</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="hover:text-red-500 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

                  <Link 
            href="/login"
            className="text-white hover:text-red-500 transition-colors font-medium mr-6"
          >
          LOGIN
          </Link>

        {/* CTA Button */}
        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-bold transition-colors">
          JOIN NOW
        </button>
      </div>
    </nav>
  )
}