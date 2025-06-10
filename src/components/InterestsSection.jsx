import React from 'react'

const InterestsSection = () => {
  const interests = [
    {
      name: 'Volleyball',
      icon: '🏐',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      name: 'Watersports',
      icon: '🏄‍♂️',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Bouldering',
      icon: '🧗‍♂️',
      color: 'bg-green-100 text-green-800'
    },
    {
      name: 'Racket Sports',
      icon: '🏸',
      color: 'bg-purple-100 text-purple-800'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-2 border border-green-200/30 shadow-sm h-full">
      <h3 className="text-sm font-medium text-gray-900 mb-2">Interests</h3>
      <div className="space-y-1">
        {interests.map((interest, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 p-1.5 ${interest.color} rounded-lg border border-white/50 transform transition-all duration-200 hover:scale-105 hover:shadow-md`}
          >
            <div className="text-base flex-shrink-0">{interest.icon}</div>
            <p className="font-medium text-xs">{interest.name}</p>
          </div>
        ))}
      </div>
      
      {/* Additional details for watersports */}
      <div className="mt-2 p-1.5 bg-white/60 rounded-lg border border-white/50 backdrop-blur-sm">
        <p className="text-xs text-gray-700 leading-tight">
          <span className="font-semibold text-green-800">Watersports:</span><br/>
          <span className="text-green-700">Windsurfing • Sailing • Kayaking</span>
        </p>
      </div>
    </div>
  )
}

export default InterestsSection 