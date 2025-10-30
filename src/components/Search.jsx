export default function Search({ value, onChange }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search devices..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}
