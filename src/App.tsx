import React from 'react'
import { shapes } from './data'
import ShapeTable from './components/ShapeTable'
import Legend from './components/Legend'

const App: React.FC = () => {
  return (
    <div className="p-6 font-sans">
      <div className="flex flex-wrap gap-6">
        {shapes.map((shape) => (
          <ShapeTable key={shape.name} shape={shape} />
        ))}
      </div>
      <Legend />
    </div>
  )
}

export default App