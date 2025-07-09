import React from 'react'
import { Note } from '../types'
import { getColor } from '../utils'


interface NoteCellProps {
  note?: Note
}

const NoteCell: React.FC<NoteCellProps> = ({ note }) => {
  return (
    <td className="w-10 h-10 border border-gray-300 text-center align-middle">
      {note && (
        <span className={`inline-block w-4 h-4 rounded-full ${getColor(note.type)}`}></span>
      )}
    </td>
  )
}

export default NoteCell