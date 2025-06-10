import React from 'react'
import PieChart from './components/PieChart'
import Timeline from './components/Timeline'
import InterestsSection from './components/InterestsSection'

function App() {
  const cuisineData = [
    { name: 'Other', value: 22.4, color: '#8B5CF6' },
    { name: 'Cafe', value: 12.3, color: '#06B6D4' },
    { name: 'Japanese', value: 12.3, color: '#EF4444' },
    { name: 'Chinese', value: 9.1, color: '#F59E0B' },
    { name: 'Bar/Pub', value: 8.2, color: '#10B981' },
    { name: 'Contemporary', value: 8.0, color: '#3B82F6' },
    { name: 'Dessert/Bakery', value: 6.2, color: '#F97316' },
    { name: 'American', value: 5.8, color: '#84CC16' },
    { name: 'Vietnamese', value: 4.5, color: '#EC4899' },
    { name: 'Korean', value: 4.3, color: '#6366F1' },
    { name: 'Bubble Tea', value: 3.7, color: '#14B8A6' },
    { name: 'Italian', value: 3.2, color: '#A855F7' }
  ]

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="max-w-[1400px] w-full bg-white rounded-2xl card-shadow overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div className="flex items-center space-x-8">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-6xl font-bold">
              R
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-2">Richard</h1>
              <p className="text-xl mb-4 opacity-90">From Numbers to Code — A Journey from Accounting to Engineering</p>
              <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
                <p className="text-lg font-semibold">Software Engineer at Bree</p>
                <p className="text-sm opacity-90">Joined: June 2, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="p-8 grid grid-cols-12 gap-6 min-h-[500px]">
          {/* Career Timeline */}
          <div className="col-span-7">
            <Timeline />
          </div>

          {/* Interests */}
          <div className="col-span-5">
            <InterestsSection />
          </div>

          {/* Fun Fact */}
          <div className="col-span-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-400">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🍽️ Fun Fact</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Visited <span className="font-bold text-orange-600 text-2xl">536 unique restaurants</span> in British Columbia since 2020!
            </p>
            <p className="text-sm text-gray-600 mt-3 italic">That's about 1 new restaurant every 3 days!</p>
          </div>

          {/* Pie Chart */}
          <div className="col-span-7 bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🥘 Cuisine Breakdown</h3>
            <div className="h-64">
              <PieChart data={cuisineData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 