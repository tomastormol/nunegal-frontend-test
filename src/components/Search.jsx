import React from 'react'

export default function Search({ value, onChange }) {
  return (
    <input
      className="search"
      placeholder="Buscar por marca o modelo"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
