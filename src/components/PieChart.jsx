import React from 'react'

const PieChart = ({ data }) => {
  const size = 200
  const center = size / 2
  const radius = 80

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
    <div className="flex items-center h-full">
      {/* SVG Chart */}
      <div className="flex-shrink-0">
        <svg width={size} height={size} className="drop-shadow-sm">
          {slices.map((slice, index) => {
            const labelPos = getLabelPosition(slice.startAngle, slice.endAngle)
            return (
              <g key={index}>
                <path
                  d={createPath(slice.startAngle, slice.endAngle, radius)}
                  fill={slice.color}
                  stroke="white"
                  strokeWidth="2"
                />
                {slice.value > 4 && (
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold fill-white"
                  >
                    {slice.value}%
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="ml-6 flex-1">
        <div className="grid grid-cols-2 gap-2 text-sm">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-700 truncate">{item.name}</span>
              <span className="text-gray-600 font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PieChart 