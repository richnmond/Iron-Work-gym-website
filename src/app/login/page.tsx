'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-md mx-auto px-6">
        {/* Toggle */}
        <div className="flex mb-8 bg-white p-1 rounded-xl">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 rounded-lg font-bold transition-colors ${
              isLogin ? 'bg-red-600 text-white' : 'text-gray-600'
            }`}
          >
            LOGIN
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 rounded-lg font-bold transition-colors ${
              !isLogin ? 'bg-red-600 text-white' : 'text-gray-600'
            }`}
          >
            SIGN UP
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Welcome Back!</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  placeholder="member@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-red-600 hover:underline">Forgot password?</a>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors"
              >
                LOGIN TO ACCOUNT
              </button>

              <div className="text-center text-gray-600">
                Don't have an account?{' '}
                <button 
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-red-600 font-bold hover:underline"
                >
                  Sign up here
                </button>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-center text-gray-600 mb-4">Or continue with</p>
              <div className="flex gap-4">
                <button className="flex-1 border py-3 rounded-lg flex items-center justify-center hover:bg-gray-50">
                  <span className="mr-2">🔵</span> Google
                </button>
                <button className="flex-1 border py-3 rounded-lg flex items-center justify-center hover:bg-gray-50">
                  <span className="mr-2">⚫</span> Apple
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Join IronWorks</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border p-3 rounded-lg" />
                <input type="text" placeholder="Last Name" className="border p-3 rounded-lg" />
              </div>

              <input type="email" placeholder="Email" className="border p-3 rounded-lg w-full" />
              <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg w-full" />

              <div className="grid grid-cols-2 gap-4">
                <input type="password" placeholder="Password" className="border p-3 rounded-lg" />
                <input type="password" placeholder="Confirm Password" className="border p-3 rounded-lg" />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Membership Plan</label>
                <select className="w-full border p-3 rounded-lg">
                  <option>Select a plan</option>
                  <option>Basic ($29/month)</option>
                  <option>Pro ($59/month)</option>
                  <option>Elite ($99/month)</option>
                </select>
              </div>

              <label className="flex items-start">
                <input type="checkbox" className="mr-2 mt-1" />
                <span className="text-gray-600 text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>

              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors"
              >
                CREATE ACCOUNT
              </button>

              <div className="text-center text-gray-600">
                Already have an account?{' '}
                <button 
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-red-600 font-bold hover:underline"
                >
                  Login here
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl text-center">
            <div className="text-2xl mb-2">📱</div>
            <p className="text-sm font-medium">Mobile App Access</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <div className="text-2xl mb-2">📅</div>
            <p className="text-sm font-medium">Easy Booking</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <div className="text-2xl mb-2">📊</div>
            <p className="text-sm font-medium">Progress Tracking</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <div className="text-2xl mb-2">💳</div>
            <p className="text-sm font-medium">Digital Wallet</p>
          </div>
        </div>
      </div>
    </div>
  )
}