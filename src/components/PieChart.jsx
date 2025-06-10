import React from 'react'

const PieChart = ({ data }) => {
  const size = 200
  const center = size / 2
  const radius = 85

  // Calculate cumulative angles
  let cumulativePercentage = 0
  const slices = data.map(item => {
    const startAngle = (cumulativePercentage / 100) * 2 * Math.PI
    cumulativePercentage += item.value
    const endAngle = (cumulativePercentage / 100) * 2 * Math.PI
    
    return {
      ...item,
      startAngle,
      endAngle
    }
  })

  // Function to create SVG path for pie slice
  const createPath = (startAngle, endAngle, radius) => {
    const x1 = center + radius * Math.cos(startAngle)
    const y1 = center + radius * Math.sin(startAngle)
    const x2 = center + radius * Math.cos(endAngle)
    const y2 = center + radius * Math.sin(endAngle)
    
    const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1
    
    return `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
  }

  // Function to get label position
  const getLabelPosition = (startAngle, endAngle) => {
    const midAngle = (startAngle + endAngle) / 2
    const labelRadius = radius * 0.7
    return {
      x: center + labelRadius * Math.cos(midAngle),
      y: center + labelRadius * Math.sin(midAngle)
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Pie Chart */}
      <div className="flex-1 flex items-center justify-center">
        <svg width={size} height={size} className="drop-shadow-lg">
          {slices.map((slice, index) => {
            const labelPos = getLabelPosition(slice.startAngle, slice.endAngle)
            return (
              <g key={index}>
                <path
                  d={createPath(slice.startAngle, slice.endAngle, radius)}
                  fill={slice.color}
                  stroke="white"
                  strokeWidth="3"
                  className="hover:opacity-80 transition-opacity duration-200"
                />
                {slice.value > 5 && (
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold fill-white drop-shadow-sm"
                  >
                    {slice.value}%
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Legend below */}
      <div className="flex-shrink-0 mt-2">
        <div className="grid grid-cols-2 gap-1 text-xs">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-1 hover:bg-white/50 rounded px-1 py-0.5 transition-colors duration-200"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0 ring-1 ring-white/50"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-700 truncate font-medium text-xs">{item.name}</span>
              <span className="text-gray-500 text-xs font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PieChart 