import SkeletonBox from "./SkeletonBox"

export default function ProductDetailsSkeleton() {
  return (
    <div className="details-container">
      <div className="details-image">
        <SkeletonBox width="60%" height="300px" radius="12px" />
      </div>

      <div className="details-info">
        <SkeletonBox width="60%" height="26px" />
        <SkeletonBox width="30%" height="20px" />

        <div className="details-table">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonBox key={i} width="80%" height="14px" />
          ))}
        </div>

        <div className="actions-panel">
          <SkeletonBox width="100%" height="38px" />
          <SkeletonBox width="100%" height="42px" radius="10px" />
        </div>
      </div>
    </div>
  )
}
