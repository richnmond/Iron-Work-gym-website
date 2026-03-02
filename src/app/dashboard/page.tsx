import { useSession } from 'next-auth/react'
import { FaCalendarAlt, FaChartLine, FaDumbbell, FaUser, FaCreditCard, FaCog } from 'react-icons/fa'
import { useRequireAuth } from '@/hooks/useAuth'

'use client'

export default function DashboardPage() {
  const { session } = useRequireAuth()
  
  if (!session) return null

  const stats = {
    workoutsThisWeek: 4,
    caloriesBurned: 3200,
    streakDays: 12,
    nextClass: 'HIIT - Tomorrow, 6:00 AM'
  }

  const quickActions = [
    { icon: <FaCalendarAlt />, label: 'Book Class', color: 'bg-blue-500' },
    { icon: <FaDumbbell />, label: 'Workout Plan', color: 'bg-green-500' },
    { icon: <FaChartLine />, label: 'Progress', color: 'bg-purple-500' },
    { icon: <FaCreditCard />, label: 'Payment', color: 'bg-yellow-500' },
  ]

  const recentActivity = [
    { action: 'Attended Yoga Class', time: '2 hours ago', points: 50 },
    { action: 'Completed Workout Plan', time: 'Yesterday', points: 100 },
    { action: 'Booked Personal Training', time: '2 days ago', points: 25 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {session.user?.name}!
            </h1>
            <p className="text-gray-600">Member since January 2024</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <FaUser className="text-red-600" />
            </div>
            <div>
              <p className="font-bold">Premium Member</p>
              <p className="text-sm text-gray-600">Renews: Jan 30, 2025</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <FaDumbbell className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{stats.workoutsThisWeek}</h3>
                <p className="text-gray-600">Workouts This Week</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 text-xl">🔥</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{stats.caloriesBurned.toLocaleString()}</h3>
                <p className="text-gray-600">Calories Burned</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 text-xl">📈</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{stats.streakDays} days</h3>
                <p className="text-gray-600">Current Streak</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <FaCalendarAlt className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{stats.nextClass}</h3>
                <p className="text-gray-600">Next Class</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className={`${action.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-2xl">{action.icon}</span>
                </div>
                <span className="font-bold">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-gray-600 text-sm">{activity.time}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                      +{activity.points} pts
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Upcoming Bookings</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-bold">Morning Yoga</p>
                <p className="text-gray-600">Tomorrow • 6:00 AM</p>
                <p className="text-sm text-gray-500">Main Studio</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold">Personal Training</p>
                <p className="text-gray-600">Jan 18 • 5:00 PM</p>
                <p className="text-sm text-gray-500">With Coach Alex</p>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 py-3 rounded-lg font-bold transition-colors">
              VIEW ALL BOOKINGS
            </button>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="flex justify-around p-4">
            {quickActions.map((action, index) => (
              <button key={index} className="flex flex-col items-center">
                <div className="text-2xl text-gray-600">{action.icon}</div>
                <span className="text-xs mt-1">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}