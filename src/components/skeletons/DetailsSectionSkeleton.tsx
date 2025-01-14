import { Skeleton } from "../ui/skeleton";

const DetailsSectionSkeleton = () => {
  return (
    <div className="space-y-2">
      <div>
        <h2 className="font-bold text-2xl">Details</h2>
        <p className="text-sm">Enter the details about your restaurant</p>
      </div>
      <div className="flex flex-col flex-1 space-y-2">
        <label>Name</label>
        <Skeleton className="h-9 bg-background" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1 space-y-2">
          <label>City</label>
          <Skeleton className="h-9 bg-background" />
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <label>Country</label>
          <Skeleton className="h-9 bg-background" />
        </div>
      </div>
      <div className="flex flex-col flex-1 space-y-2">
        <label>Delivery Price (₹)</label>
        <Skeleton className="h-9 bg-background md:w-80" />
      </div>
      <div className="flex flex-col flex-1 space-y-2">
        <label>Estimated Delivery Time (in minutes)</label>
        <Skeleton className="h-9 bg-background md:w-80" />
      </div>
    </div>
  );
};

export default DetailsSectionSkeleton;
