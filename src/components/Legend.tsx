import React from 'react'

const Legend: React.FC = () => {
  const legendItems = [
    { color: 'bg-red-500', label: 'Tônica', description: 'A nota fundamental do acorde.' },
    { color: 'bg-blue-500', label: 'Terça', description: 'Forma a terça maior com a tônica.' },
    { color: 'bg-yellow-400', label: 'Quinta', description: 'Forma a quinta justa com a tônica.' },
  ]

  return (
    <div className="mt-6">
      <h4 className="font-semibold mb-2">Significado das Cores:</h4>
      <ul className="list-disc pl-5 space-y-1">
        {legendItems.map(({ color, label, description }) => (
          <li key={label}>
            <span className={`inline-block w-4 h-4 rounded-full ${color} mr-2`}></span>
            <strong>{label}</strong>: {description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Legend