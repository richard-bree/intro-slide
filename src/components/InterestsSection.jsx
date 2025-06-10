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
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 h-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">⚡ Interests</h3>
      <div className="grid grid-cols-2 gap-4">
        {interests.map((interest, index) => (
          <div
            key={index}
            className={`${interest.color} rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-200`}
          >
            <div className="text-3xl mb-2">{interest.icon}</div>
            <p className="font-semibold text-sm">{interest.name}</p>
          </div>
        ))}
      </div>
      
      {/* Additional details for watersports */}
      <div className="mt-4 bg-white/50 rounded-lg p-3">
        <p className="text-xs text-gray-600 text-center">
          <span className="font-medium">Watersports:</span> Windsurfing • Sailing • Kayaking • Paddleboarding
        </p>
      </div>
    </div>
  )
}

export default InterestsSection 