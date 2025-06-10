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
    <div className="h-screen py-3 px-px overflow-hidden" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)'
    }}>
              <div className="max-w-[1350px] h-full mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/30 flex flex-col intro-container">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-white to-blue-50/50 px-8 py-3">
          <div className="flex items-center space-x-8">
            {/* Large Photo Section */}
            <div className="flex-shrink-0">
              <div className="w-36 h-36 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center border-2 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                                      <div className="text-5xl font-light text-blue-400 mb-2">R</div>
                  <p className="text-xs text-blue-600 font-medium">Add your photo here</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 space-y-3">
              <div>
                <h1 className="text-4xl font-light text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">Richard</h1>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  From Numbers to Code —<br/>
                  <span className="text-blue-700">A Journey from Accounting to Engineering</span>
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl px-6 py-4 border border-blue-200/30">
                <p className="text-lg font-semibold text-gray-900">Software Engineer at Bree</p>
                <p className="text-base text-blue-700 mt-1">Joined June 2, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 pb-2 space-y-2 flex-1 flex flex-col">
                    {/* Career Timeline */}
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-2 border border-slate-200/50 shadow-sm">
            <Timeline />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-5 gap-2 flex-1">
              {/* Interests */}
              <div className="col-span-2">
                <InterestsSection />
              </div>

              {/* Fun Fact */}
              <div className="col-span-1 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-2 border border-orange-200/30 shadow-sm">
                <div className="text-center space-y-1 h-full flex flex-col justify-center">
                  <div className="text-xl animate-bounce">🍽️</div>
                  <div>
                    <div className="text-lg font-light text-orange-600">536</div>
                    <p className="text-xs text-orange-700 font-medium">Unique Restaurants</p>
                    <p className="text-xs text-orange-600">in BC since 2020</p>
                  </div>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="col-span-2 bg-gradient-to-br from-white to-purple-50 rounded-2xl p-2 border border-purple-200/30 shadow-sm flex flex-col">
                <h3 className="text-xs font-medium text-gray-900 mb-1 flex-shrink-0">Cuisine Preferences</h3>
                <div className="flex-1 min-h-0">
                  <PieChart data={cuisineData} />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App 