import React from 'react'

export default function Search({ value, onChange }) {
  return (
    <input
      className="search"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
