import React from 'react'
import { Shape } from '../types'
import { strings } from '../data'
import NoteCell from './NoteCell'


interface ShapeTableProps {
  shape: Shape
}

const ShapeTable: React.FC<ShapeTableProps> = ({ shape }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Shape {shape.name}</h3>
      <table className="border border-gray-400 border-collapse">
        <tbody>
          {strings.map((stringName, rowIdx) => (
            <tr key={rowIdx}>
              <th className="border border-gray-300 px-2">{stringName}</th>
              {[0, 1, 2, 3].map((colIdx) => {
                const note = shape.notes[rowIdx]?.find((n) => n.col === colIdx)
                return <NoteCell key={colIdx} note={note} />
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShapeTable