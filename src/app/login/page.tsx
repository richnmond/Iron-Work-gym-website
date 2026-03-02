'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [loginData, setLoginData] = useState({ email: '', password: '', rememberMe: false })
  const [signupData, setSignupData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    password: '', 
    confirmPassword: '',
    plan: 'basic',
    agreeTerms: false
  })

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setSignupData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }))
    } else {
      setSignupData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', loginData)
    // Add your login logic here
  }

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Signup:', signupData)
    // Add your signup logic here
  }

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
            
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="member@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    onChange={handleLoginChange}
                    className="mr-2" 
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <Link href="#" className="text-red-600 hover:underline text-sm">Forgot password?</Link>
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
                <button type="button" className="flex-1 border py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
                  <span className="mr-2">🔵</span> Google
                </button>
                <button type="button" className="flex-1 border py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
                  <span className="mr-2">⚫</span> Apple
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Join IronWorks</h2>
            
            <form className="space-y-6" onSubmit={handleSignupSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={signupData.firstName}
                    onChange={handleSignupChange}
                    placeholder="John" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={signupData.lastName}
                    onChange={handleSignupChange}
                    placeholder="Doe" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={signupData.phone}
                  onChange={handleSignupChange}
                  placeholder="(555) 123-4567" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    placeholder="••••••••" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    placeholder="••••••••" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm">Membership Plan</label>
                <select 
                  name="plan"
                  value={signupData.plan}
                  onChange={handleSignupChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="basic">Basic - $29/month</option>
                  <option value="pro">Pro - $59/month</option>
                  <option value="elite">Elite - $99/month</option>
                </select>
              </div>

              <label className="flex items-start">
                <input 
                  type="checkbox" 
                  name="agreeTerms"
                  checked={signupData.agreeTerms}
                  onChange={handleSignupChange}
                  className="mr-2 mt-1" 
                  required
                />
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