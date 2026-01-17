'use client'

import { useState } from 'react'
import { FaTimes, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book a Class</h2>
            <p className="text-gray-600">Reserve your spot in advance</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Steps */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= num ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {num}
                </div>
                {num < 3 && (
                  <div className={`w-16 h-1 ${step > num ? 'bg-red-600' : 'bg-gray-200'}`}></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-2">
            <span className="text-sm font-medium text-gray-500">
              {step === 1 && 'Select Class'}
              {step === 2 && 'Your Details'}
              {step === 3 && 'Confirmation'}
            </span>
          </div>
        </div>

        {/* Step 1: Class Selection */}
        {step === 1 && (
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6">Choose a Class</h3>
            <div className="space-y-4">
              {['Morning Yoga', 'HIIT Blast', 'Spin Class', 'Strength Training'].map((className, idx) => (
                <div 
                  key={idx}
                  className="border rounded-xl p-4 hover:border-red-500 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg">{className}</h4>
                      <div className="flex items-center text-gray-600 mt-2">
                        <FaCalendarAlt className="mr-2" />
                        <span className="mr-4">Mon, Wed, Fri</span>
                        <FaClock className="mr-2" />
                        <span>6:00 AM</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setStep(2)}
                      className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Personal Details */}
        {step === 2 && (
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6">Your Information</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border p-3 rounded-lg" />
                <input type="text" placeholder="Last Name" className="border p-3 rounded-lg" />
              </div>
              <input type="email" placeholder="Email" className="border p-3 rounded-lg w-full" />
              <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg w-full" />
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Selected Class</h4>
                <p>Morning Yoga - Mon, 6:00 AM</p>
              </div>

              <button 
                type="button"
                onClick={() => setStep(3)}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700"
              >
                CONTINUE TO PAYMENT
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="p-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-green-600">✓</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600">Your spot has been reserved</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold mb-4">Booking Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Class:</span>
                  <span className="font-bold">Morning Yoga</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-bold">Mon, Jan 15 • 6:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-bold">Main Studio</span>
                </div>
                <div className="flex justify-between border-t pt-3 mt-3">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-bold">IRON-789012</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={onClose}
                className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-bold hover:bg-gray-50"
              >
                CLOSE
              </button>
              <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">
                ADD TO CALENDAR
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}