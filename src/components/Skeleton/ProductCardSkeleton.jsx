import SkeletonBox from "./SkeletonBox"

export default function ProductCardSkeleton() {
  return (
    <div className="product-card">
      <SkeletonBox width="100px" height="100px" radius="10px" />
      <SkeletonBox width="70%" height="14px" />
      <SkeletonBox width="50%" height="12px" />
    </div>
  )
}
