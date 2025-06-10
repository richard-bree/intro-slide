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
    <div className="h-full">
      <h3 className="text-sm font-medium text-gray-900 mb-2">Career Timeline</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200"></div>
        
        {/* Timeline items */}
        <div className="flex justify-between">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative group">
              {/* Icon */}
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-base mb-1 border-2 border-white shadow-md relative z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                {item.icon}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">{item.title}</p>
                <p className="text-sm font-semibold text-gray-900">{item.location}</p>
                {item.date && (
                  <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
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