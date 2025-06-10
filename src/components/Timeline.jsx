import React from 'react'

const Timeline = () => {
  const timelineData = [
    {
      title: 'Originally from',
      location: 'Edmonton',
      date: '',
      icon: '🏠',
      color: 'bg-blue-500'
    },
    {
      title: 'Moved to',
      location: 'Vancouver',
      date: 'August 2020',
      icon: '🌊',
      color: 'bg-green-500'
    },
    {
      title: 'Joined',
      location: 'Bree',
      date: 'June 2, 2025',
      icon: '💼',
      color: 'bg-purple-500'
    },
    {
      title: 'Moving to',
      location: 'Toronto',
      date: 'August 2025',
      icon: '🏙️',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 h-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">🗺️ Career Timeline</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-8 left-8 right-8 h-1 bg-gray-300 rounded"></div>
        
        {/* Timeline items */}
        <div className="flex justify-between">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Icon */}
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-2xl mb-3 shadow-lg relative z-10`}>
                {item.icon}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">{item.title}</p>
                <p className="text-lg font-bold text-gray-800">{item.location}</p>
                {item.date && (
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline 