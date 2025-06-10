import React from 'react'
import PieChart from './components/PieChart'
import Timeline from './components/Timeline'
import InterestsSection from './components/InterestsSection'

function App() {
  // Image assets object
  const imageAssets = {
    photo1: '/src/assets/1.jpg',
    photo2: '/src/assets/2.jpeg',
    photo3: '/src/assets/3.jpg',
    photo4: '/src/assets/4.jpg',
    photo5: '/src/assets/5.jpg',
    photo6: '/src/assets/6.jpg',
    photo7: '/src/assets/7.jpg',
    photo8: '/src/assets/8.jpg',
  }

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
        <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/50 px-8 py-4 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-lg"></div>
            <div className="absolute top-8 -left-6 w-20 h-20 bg-gradient-to-br from-indigo-200/15 to-blue-300/15 rounded-full blur-md"></div>
            <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-200/10 to-pink-300/10 rounded-full blur-sm"></div>
          </div>
          
          <div className="relative flex items-center space-x-8">
            {/* Enhanced Photo Section */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-3xl blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative w-36 h-36 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center border-2 border-white/60 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <img 
                  src={imageAssets.photo1} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              {/* Floating accent dots */}
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse shadow-md"></div>
            </div>
            
            {/* Enhanced Content */}
            <div className="flex-1 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent hover:from-blue-900 hover:to-purple-900 transition-all duration-300">Richard</h1>
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                
                <div className="relative">
                  <p className="text-lg text-gray-700 font-medium leading-relaxed">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">From Numbers to Code</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <br/>
                    <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent font-semibold">A Journey from Accounting to Engineering</span>
                  </p>
                  <div className="absolute -left-3 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-30"></div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-gradient-to-r from-white/80 via-blue-50/60 to-indigo-50/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-sm"></div>
                        <p className="text-lg font-bold text-gray-900">Software Engineer at Bree</p>
                      </div>
                      <p className="text-base text-blue-700 mt-1 font-medium">Joined June 2, 2025</p>
                    </div>
                    <div className="text-right opacity-60">
                      <div className="text-xl">🚀</div>
                    </div>
                  </div>
                </div>
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
          <div className="grid grid-cols-6 gap-2 flex-1">
              {/* Interests */}
              <div className="col-span-2">
                <InterestsSection />
              </div>

              {/* Pie Chart with Restaurant Info */}
              <div className="col-span-2 bg-gradient-to-br from-white to-purple-50 rounded-2xl p-2 border border-purple-200/30 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-1 flex-shrink-0">
                  <h3 className="text-xs font-medium text-gray-900">Cuisine Preferences</h3>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-purple-600">536</div>
                    <p className="text-xs text-purple-600">Restaurants since 2020</p>
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <PieChart data={cuisineData} />
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="col-span-2 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-2 border border-slate-200/30 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-1 flex-shrink-0">
                  <h3 className="text-xs font-medium text-gray-900">Photo Gallery</h3>
                  <span className="text-xs text-gray-500">Add photos</span>
                </div>
                
                <div className="flex-1 grid grid-cols-3 gap-1">
                  {/* Featured large photo */}
                  <div className="col-span-3 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden">
                    <img 
                      src={imageAssets.photo2} 
                      alt="Featured" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Regular photo slots */}
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-md flex items-center justify-center border border-gray-200/50 hover:shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer group overflow-hidden aspect-square">
                      <img 
                        src={imageAssets[`photo${i + 3}`]} 
                        alt={`Gallery ${i + 1}`} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-1 text-xs text-gray-500 text-center flex-shrink-0">
                  <span>7 / 7 photos</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App 