import React from "react";
const SkeletonLine = ({ w = "w-full" }) => (
  <div className={`h-4 ${w} bg-slate-200 rounded animate-pulse`} />
);
const DocsSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Title */}
      <div className="mb-10">
        <div className="h-10 w-2/3 bg-slate-200 rounded mb-4" />
        <div className="h-5 w-1/2 bg-slate-200 rounded" />
      </div>
      {/* Content */}
      <div className="space-y-4 max-w-4xl">
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine w="w-5/6" />
        <SkeletonLine />
        <SkeletonLine w="w-4/6" />
        <div className="h-6 w-1/3 bg-slate-200 rounded mt-8" />
        <SkeletonLine />
        <SkeletonLine w="w-5/6" />
        <SkeletonLine />
      </div>
      <div className="space-y-4 max-w-4xl">
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine w="w-5/6" />
        <SkeletonLine />
        <SkeletonLine w="w-4/6" />
        <div className="h-6 w-1/3 bg-slate-200 rounded mt-8" />
        <SkeletonLine />
        <SkeletonLine w="w-5/6" />
        <SkeletonLine />
      </div>
    </div>
  );
};
export default DocsSkeleton;
