'use client'

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import GymMap from '@/components/Map'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">GET IN TOUCH</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Membership Questions</option>
                  <option>Personal Training</option>
                  <option>Corporate Membership</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-gray-600">123 Fitness Street</p>
                    <p className="text-gray-600">Gym City, 10001</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <FaPhone className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">24/7 Support</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <FaEnvelope className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">info@ironworks.com</p>
                    <p className="text-gray-600">members@ironworks.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <FaClock className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Hours</h3>
                    <p className="text-gray-600">Open 24/7</p>
                    <p className="text-gray-600">Staff: 5AM-11PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden">
              <GymMap />
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2">Do you offer day passes?</h4>
                  <p className="text-gray-600">Yes! Day passes are $25 and include access to all facilities.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-bold mb-2">Is there parking available?</h4>
                  <p className="text-gray-600">We have free underground parking for all members.</p>
                </div>
                <div className="pb-4">
                  <h4 className="font-bold mb-2">Can I cancel my membership anytime?</h4>
                  <p className="text-gray-600">Yes, you can cancel anytime with 30 days notice. No hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}