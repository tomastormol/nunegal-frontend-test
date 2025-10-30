import './skeleton.css'

export default function SkeletonBox({ width = "100%", height = "16px", radius = "8px" }) {
  return (
    <div
      className="skeleton-box"
      style={{ width, height, borderRadius: radius }}
    />
  )
}
